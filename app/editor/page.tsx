"use client";

import { useState } from "react";

export default function Editor() {

    const [rects, setRects] = useState<
{
    x:number;
    y:number;
    width:number;
    height:number;
}[]
>([]);

function saveCollision() {

    const code =
`export const collisions = ${JSON.stringify(rects, null, 4)};`;

    const blob = new Blob(
        [code],
        {
            type: "text/plain",
        }
    );

    const url =
        URL.createObjectURL(blob);

    const a =
        document.createElement("a");

    a.href = url;

    a.download = "collision.ts";

    a.click();

    URL.revokeObjectURL(url);

}

const [drawing, setDrawing] = useState(false);

const [startPoint, setStartPoint] = useState<{
    x:number;
    y:number;
} | null>(null);

const [previewRect, setPreviewRect] = useState<{
    x:number;
    y:number;
    width:number;
    height:number;
} | null>(null);

    return (

        <div
            className="
            w-screen
            h-screen
            bg-gray-900
            overflow-auto
            "
        >
            <div
    className="relative"
    style={{

        width:3063,

        height:1750

    }}
>

 
            <img

                src="/images/minimap.png"

                draggable={false}

                className="select-none"

                
onContextMenu={(e)=>{

    e.preventDefault();

    const rect =
        e.currentTarget.getBoundingClientRect();

    const x =
        e.clientX - rect.left;

    const y =
        e.clientY - rect.top;

    setRects(prev=>

        prev.filter(r=>{

            return !(

                x>=r.x &&

                x<=r.x+r.width &&

                y>=r.y &&

                y<=r.y+r.height

            );

        })

    );

}}
                   onMouseMove={(e)=>{

    if(!drawing || !startPoint) return;

    const rect =
        e.currentTarget.getBoundingClientRect();

    const currentX =
        e.clientX - rect.left;

    const currentY =
        e.clientY - rect.top;

    setPreviewRect({

        x:Math.min(startPoint.x,currentX),

        y:Math.min(startPoint.y,currentY),

        width:Math.abs(currentX-startPoint.x),

        height:Math.abs(currentY-startPoint.y),

    });

}}

onMouseDown={(e)=>{

    const rect =
        e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    setDrawing(true);

    setStartPoint({x,y});

}}
onMouseUp={(e)=>{

    if(!drawing || !startPoint) return;

    const rect =
        e.currentTarget.getBoundingClientRect();

    const endX =
        e.clientX - rect.left;

    const endY =
        e.clientY - rect.top;

    setRects(prev=>[

        ...prev,

        {

            x:Math.min(startPoint.x,endX),

            y:Math.min(startPoint.y,endY),

            width:Math.abs(endX-startPoint.x),

            height:Math.abs(endY-startPoint.y),

        }

    ]);

    setDrawing(false);
    setPreviewRect(null);
    setStartPoint(null);

}}

            />
            {

rects.map((r,index)=>(

<div

key={index}

className="
absolute
bg-red-500/50
border
border-red-700
"

style={{

left:r.x,

top:r.y,

width:r.width,

height:r.height,

}}

>

</div>

))

}
{previewRect && (

<div

className="
absolute
bg-blue-500/30
border-2
border-blue-600
pointer-events-none
"

style={{

left:previewRect.x,

top:previewRect.y,

width:previewRect.width,

height:previewRect.height,

}}

>

</div>

)}
        </div>
        <button

onClick={saveCollision}

className="
absolute
top-4
right-4
bg-blue-600
text-white
px-5
py-2
rounded-lg
"

>

💾 Save

</button>
        </div>

    );

}