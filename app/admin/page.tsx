"use client";

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";


const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function trackEvent(
  eventType: string,
  worldId?: number
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } =
    await supabase
      .from("player_events")
      .insert({
        user_id: user.id,
        event_type: eventType,
        world_id: worldId ?? null,
      });

  if (error) {
    console.error(
      "TRACK EVENT ERROR",
      error
    );
  }
}

export default function AdminPage() {
  const [players, setPlayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const ADMIN_EMAIL = "phamngoctuan9d1112@gmail.com";
  const [events, setEvents] = useState<any[]>([]);
  const [authorized, setAuthorized] = useState(false);
const [checkingAuth, setCheckingAuth] = useState(true);

async function loadEvents() {
  const { data } = await supabase
    .from("player_events")
    .select("*");

  setEvents(data || []);
}

  async function loadPlayers() {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .order("xp", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setPlayers(data || []);
    setLoading(false);
  }

  useEffect(() => {
  checkAdmin();
}, []);

useEffect(() => {
  if (authorized) {
    loadEvents();
    loadPlayers();
  }
}, [authorized]);

const worldStats: Record<number, number> = {};

events.forEach((e) => {
  if (
    e.event_type === "world_complete" &&
    e.world_id
  ) {
    worldStats[e.world_id] =
      (worldStats[e.world_id] || 0) + 1;
  }
});

  const totalPlayers = players.length;

  const totalXP = players.reduce(
    (sum, p) => sum + (p.xp || 0),
    0
  );

  const totalCoins = players.reduce(
    (sum, p) => sum + (p.coins || 0),
    0
  );

  async function checkAdmin() {
  const {
  data: { user },
  error,
} = await supabase.auth.getUser();


console.log("USER =", user);
console.log("ERROR =", error);

  if (!user) {
    setAuthorized(false);
    setCheckingAuth(false);
    return;
  }

  if (user.email === ADMIN_EMAIL) {
    setAuthorized(true);
  } else {
    setAuthorized(false);
  }

  setCheckingAuth(false);
}

if (checkingAuth) {
  return (
    <div className="p-10 text-white">
      Đang kiểm tra quyền...
    </div>
  );
}

if (!authorized) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-black">
          ⛔ Truy cập bị từ chối
        </h1>

        <p className="mt-4">
          Bạn không có quyền vào trang Admin.
        </p>
      </div>
    </div>
  );
}

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-5xl font-black mb-8">
        👑 Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-slate-800 p-6 rounded-2xl">
          <div className="text-4xl font-black">
            {totalPlayers}
          </div>
          <div>Tổng người chơi</div>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <div className="text-4xl font-black">
            {totalXP}
          </div>
          <div>Tổng XP</div>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <div className="text-4xl font-black">
            {totalCoins}
          </div>
          <div>Tổng Coin</div>
        </div>
        <div className="bg-slate-800 rounded-2xl p-6 mt-8">
  <h2 className="text-3xl font-bold mb-4">
    🌎 World phổ biến
  </h2>

  {Object.entries(worldStats)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .map(([world, count]) => (
      <div
        key={world}
        className="flex justify-between py-2"
      >
        <span>World {world}</span>
        <span>{count} lượt hoàn thành</span>
      </div>
    ))}
</div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6">
        <h2 className="text-3xl font-bold mb-5">
          👥 Danh sách người chơi
        </h2>

        {loading ? (
          <div>Đang tải...</div>
        ) : (
          <div className="space-y-3">
            {players.map((player, index) => (
              <div
                key={player.id}
                className="
                  bg-slate-700
                  p-4
                  rounded-xl
                  flex
                  justify-between
                  items-center
                "
              >
                <div>
                  <div className="font-bold">
                    #{index + 1} {player.display_name}
                  </div>

                  <div className="text-sm text-slate-300">
                    {player.id}
                  </div>
                </div>

                <div className="flex gap-5">
                  <span>⭐ {player.xp || 0}</span>
                  <span>🪙 {player.coins || 0}</span>
                  <span>🔥 {player.streak || 0}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}