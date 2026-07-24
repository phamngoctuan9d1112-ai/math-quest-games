import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function createChatSession() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("chat_sessions")
    .insert({
      user_id: user.id,
      title: "Cuộc trò chuyện mới",
    })
    .select()
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export async function getChatSessions() {
  const { data, error } = await supabase
    .from("chat_sessions")
    .select("*")
    .order("updated_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function renameSession(
  sessionId: string,
  title: string
) {
  return await supabase
    .from("chat_sessions")
    .update({
      title,
      updated_at: new Date().toISOString(),
    })
    .eq("id", sessionId);
}

export async function deleteSession(
  sessionId: string
) {
  return await supabase
    .from("chat_sessions")
    .delete()
    .eq("id", sessionId);
}


export async function saveMessage(
  sessionId: string,
  role: "user" | "assistant",
  content: string
) {
  const { error } = await supabase
    .from("chat_messages")
    .insert({
      session_id: sessionId,
      role,
      content,
    });

  if (error) {
    console.error(error);
  }

  await supabase
    .from("chat_sessions")
    .update({
      updated_at: new Date().toISOString(),
    })
    .eq("id", sessionId);
}

export async function getMessages(
  sessionId: string
) {
  const { data, error } = await supabase
    .from("chat_messages")
    .select("*")
    .eq("session_id", sessionId)
    .order("created_at", {
      ascending: true,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}