import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function createChatSession() {

    const {

        data: {

            user,

        },

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