import { supabase } from "./supabase";

export async function updateStreak(userId: string) {
  const today = new Date();

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (!profile) return;

  const lastPlayed = profile.last_played
    ? new Date(profile.last_played)
    : null;

  // Chưa từng chơi
  if (!lastPlayed) {
    await supabase
      .from("profiles")
      .update({
        streak: 1,
        best_streak: 1,
        last_played: today.toISOString(),
      })
      .eq("id", userId);

    return;
  }

  const diffDays = Math.floor(
    (today.getTime() - lastPlayed.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  // Chơi lại cùng ngày
  if (diffDays === 0) {
    return;
  }

  // Đúng ngày tiếp theo
  if (diffDays === 1) {
    const newStreak = profile.streak + 1;

    await supabase
      .from("profiles")
      .update({
        streak: newStreak,
        best_streak: Math.max(
          newStreak,
          profile.best_streak
        ),
        last_played: today.toISOString(),
      })
      .eq("id", userId);

    return;
  }

  // Đứt streak
  await supabase
    .from("profiles")
    .update({
      streak: 1,
      last_played: today.toISOString(),
    })
    .eq("id", userId);
}