import { worldNames } from "./worldNames";

export function getWorlds(unlockedWorlds: number[]) {
  return Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    name: worldNames[i + 1] || `World ${i + 1}`,
    unlocked: unlockedWorlds.includes(i + 1),
  }));
}