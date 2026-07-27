let collisionCtx: CanvasRenderingContext2D | null = null;

export let MAP_WIDTH = 0;
export let MAP_HEIGHT = 0;

/*
==================================
LOAD COLLISION MAP
==================================
*/

export async function loadCollisionMap() {

    return new Promise<void>((resolve) => {

        const img = new Image();

        img.src = "/images/collision.png";

        img.onload = () => {

            MAP_WIDTH = img.width;
            MAP_HEIGHT = img.height;

            const canvas =
                document.createElement("canvas");

            canvas.width = img.width;
            canvas.height = img.height;

            collisionCtx =
                canvas.getContext("2d");

            collisionCtx!.drawImage(
                img,
                0,
                0
            );

            console.log(
                "Collision Loaded:",
                img.width,
                img.height
            );

            resolve();

        };

    });

}

/*
==================================
PIXEL CHECK
==================================
*/

function isWhite(
    r: number,
    g: number,
    b: number
) {

    return (
        r > 200 &&
        g > 200 &&
        b > 200
    );

}

/*
==================================
PLAYER COLLISION
==================================
*/

export function canMove(
    x: number,
    y: number,
    width = 40,
    height = 52
) {

    if (!collisionCtx)
        return false;

    const margin = 4;

    const points = [

        [x + margin, y + margin],

        [x + width - margin, y + margin],

        [x + margin, y + height - margin],

        [x + width - margin, y + height - margin],

        [x + width / 2, y + margin],

        [x + width / 2, y + height - margin],

        [x + margin, y + height / 2],

        [x + width - margin, y + height / 2],

    ];

    for (const [px, py] of points) {

        if (
            px < 0 ||
            py < 0 ||
            px >= MAP_WIDTH ||
            py >= MAP_HEIGHT
        ) {

            return false;

        }

        const pixel =
            collisionCtx.getImageData(
                Math.floor(px),
                Math.floor(py),
                1,
                1
            ).data;

        if (
            !isWhite(
                pixel[0],
                pixel[1],
                pixel[2]
            )
        ) {

            return false;

        }

    }

    return true;

}