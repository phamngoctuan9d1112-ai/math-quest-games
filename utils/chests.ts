import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export async function getPlayerChests(userId: string) {
  const { data, error } = await supabase
    .from("chests")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}
export async function createChest(
  userId: string,
  type: string
) {
  const { error } = await supabase
    .from("chests")
    .insert({
      user_id: userId,
      type,
      opened: false,
    });

  if (error) throw error;
}
export async function openChest(id: number) {
  const { error } = await supabase
    .from("chests")
    .update({
      opened: true,
    })
    .eq("id", id);

  if (error) throw error;
}
export function randomChestType() {
  const r = Math.random();

  if (r < 0.60) return "bronze";

  if (r < 0.90) return "silver";

  if (r < 0.99) return "gold";

  return "legend";
}