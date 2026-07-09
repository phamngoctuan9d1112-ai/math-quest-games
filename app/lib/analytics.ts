import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function trackEvent(
  eventType: string,
  worldId?: number
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase
    .from("player_events")
    .insert({
      user_id: user.id,
      event_type: eventType,
      world_id: worldId ?? null,
    });

  if (error) {
    console.error(error);
  }
}