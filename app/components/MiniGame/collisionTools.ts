export type Rect = { x: number; y: number; width: number; height: number };
export type Point = { x: number; y: number };

// Dữ liệu trong collision.ts được trích từ chính ảnh minimap.png ở kích thước gốc (3063×1750),
// còn game hiển thị ảnh đó rộng 1632px, nên phải nhân 1632/3063 ≈ 0.533 mới khớp bản đồ.
export const MAP_IMAGE_WIDTH = 3063;
export const MAP_IMAGE_HEIGHT = 1750;
export const COLLISION_SCALE = 1632 / MAP_IMAGE_WIDTH;

// Bỏ các hộp quá nhỏ (đèn, cọc rào, vết nhiễu 0×0...) để không chặn đường vô hình.
// Tính theo pixel của ảnh gốc, trước khi nhân tỉ lệ.
export const MIN_RECT_SIZE = 20;

export function scaleRects(
  rects: Rect[],
  scale = COLLISION_SCALE,
  minSize = MIN_RECT_SIZE
): Rect[] {
  return rects
    .filter((r) => r.width >= minSize && r.height >= minSize)
    .map((r) => ({
      x: r.x * scale,
      y: r.y * scale,
      width: r.width * scale,
      height: r.height * scale,
    }));
}

/** Hộp va chạm hình vuông cạnh `hitbox`, tâm tại (cx, cy). */
export function hitsWall(rects: Rect[], cx: number, cy: number, hitbox: number): boolean {
  const half = hitbox / 2;
  const left = cx - half;
  const right = cx + half;
  const top = cy - half;
  const bottom = cy + half;

  for (const r of rects) {
    if (right > r.x && left < r.x + r.width && bottom > r.y && top < r.y + r.height) {
      return true;
    }
  }
  return false;
}

/**
 * Kiểm tra từ điểm xuất phát có đi được tới (gần) tất cả các mục tiêu không.
 * Dùng để phát hiện dữ liệu va chạm không khớp bản đồ (khi đó game tắt va chạm
 * thay vì để nhân vật bị kẹt).
 */
export function checkReachable(
  rects: Rect[],
  spawn: Point,
  map: { w: number; h: number },
  hitbox: number,
  targets: Point[],
  reach: number,
  step = 6
): boolean {
  const cols = Math.floor(map.w / step) + 1;
  const rows = Math.floor(map.h / step) + 1;
  const sx = Math.round(spawn.x / step);
  const sy = Math.round(spawn.y / step);

  if (hitsWall(rects, sx * step, sy * step, hitbox)) return false;

  // 0 = chưa xét, 1 = đi được, 2 = bị chặn
  const state = new Uint8Array(cols * rows);
  const queue = new Int32Array(cols * rows);
  let head = 0;
  let tail = 0;

  const start = sy * cols + sx;
  state[start] = 1;
  queue[tail++] = start;

  while (head < tail) {
    const idx = queue[head++];
    const gx = idx % cols;
    const gy = (idx - gx) / cols;

    for (let k = 0; k < 4; k++) {
      const nx = gx + (k === 0 ? 1 : k === 1 ? -1 : 0);
      const ny = gy + (k === 2 ? 1 : k === 3 ? -1 : 0);
      if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;

      const ni = ny * cols + nx;
      if (state[ni] !== 0) continue;

      if (hitsWall(rects, nx * step, ny * step, hitbox)) {
        state[ni] = 2;
      } else {
        state[ni] = 1;
        queue[tail++] = ni;
      }
    }
  }

  return targets.every((t) => {
    const gx0 = Math.max(0, Math.floor((t.x - reach) / step));
    const gx1 = Math.min(cols - 1, Math.ceil((t.x + reach) / step));
    const gy0 = Math.max(0, Math.floor((t.y - reach) / step));
    const gy1 = Math.min(rows - 1, Math.ceil((t.y + reach) / step));

    for (let gy = gy0; gy <= gy1; gy++) {
      for (let gx = gx0; gx <= gx1; gx++) {
        if (
          state[gy * cols + gx] === 1 &&
          Math.abs(gx * step - t.x) < reach &&
          Math.abs(gy * step - t.y) < reach
        ) {
          return true;
        }
      }
    }
    return false;
  });
}
