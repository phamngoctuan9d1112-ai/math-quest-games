export async function loadCollision() {

    const img = new Image();

    img.src = "/images/collision.png";

    await img.decode();

    const canvas = document.createElement("canvas");

    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d")!;

    ctx.drawImage(img, 0, 0);

    return ctx;

}