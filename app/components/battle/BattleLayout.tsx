"use client";

import { ReactNode } from "react";

type BattleLayoutProps = {
    children: ReactNode;
};

export default function BattleLayout({

    children,

}: BattleLayoutProps) {

    return (

        <main
            className="
            min-h-screen

            bg-[url('/worlds/world4/bg.jpg')]
            bg-cover
            bg-center

            flex
            justify-center
            items-center

            p-6
            "
        >

            <div
                className="
                w-[1100px]

                rounded-[30px]

                border-[3px]
                border-[#B98A43]

                bg-[#0D1623]/95

                shadow-[0_0_60px_rgba(0,0,0,.7)]

                overflow-hidden
                "
            >

                {children}

            </div>

        </main>

    );

}