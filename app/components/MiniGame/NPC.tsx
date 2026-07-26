"use client";

type Props = {
    x: number;
    y: number;
    completed?: boolean;
};

export default function NPC({
    x,
    y,
    completed = false,
}: Props) {

    return (

        <div
            className="
            absolute
            w-12
            h-12
            z-20
            "
            style={{
                left: x,
                top: y,
                transform: "translate(-50%,-50%)",
            }}
        >

            <img
                src="/images/npc.png"
                alt=""
                className="
                w-full
                h-full
                object-contain
                "
            />

        </div>

    );

}