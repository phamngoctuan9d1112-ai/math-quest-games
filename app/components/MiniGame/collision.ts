export const MAP_WIDTH = 1632;
export const MAP_HEIGHT = 918;

let collisionCanvas: HTMLCanvasElement | null = null;

let collisionCtx: CanvasRenderingContext2D | null = null;

export async function loadCollisionMap() {

    return new Promise<void>((resolve) => {

        const img = new Image();

        img.src = "/images/collision.png";

        img.onload = () => {

            collisionCanvas = document.createElement("canvas");

            collisionCanvas.width = img.width;

            collisionCanvas.height = img.height;

            collisionCtx = collisionCanvas.getContext("2d");

            collisionCtx!.drawImage(img, 0, 0);

            resolve();

        };

    });

}

export function canMove(x:number,y:number){

    if(!collisionCtx) return true;

    const pixel = collisionCtx.getImageData(

        Math.floor(x),

        Math.floor(y),

        1,

        1

    ).data;

    return (

        pixel[0] > 200 &&

        pixel[1] > 200 &&

        pixel[2] > 200

    );

}