"use client";

export interface ChatSession {

    id: string;

    title: string;

}

interface Props {

    sessions: ChatSession[];

    currentSessionId: string | null;

    onNewChat: () => void;

    onSelect: (id: string) => void;

}

export default function ChatSidebar({

    sessions,

    currentSessionId,

    onNewChat,

    onSelect,

}: Props) {

    return (

        <div
            className="
            w-72
            bg-zinc-950
            border-r
            border-zinc-800
            flex
            flex-col
            "
        >

            <div className="p-4">

                <button

                    onClick={onNewChat}

                    className="
                    w-full
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-500
                    transition
                    py-3
                    text-white
                    font-semibold
                    "
                >

                    + Cuộc trò chuyện mới

                </button>

            </div>

            <div
                className="
                flex-1
                overflow-y-auto
                px-2
                pb-4
                "
            >

                {

                    sessions.map(session => (

                        <button

                            key={session.id}

                            onClick={() => onSelect(session.id)}

                            className={`
                            w-full
                            text-left
                            px-4
                            py-3
                            rounded-xl
                            mb-2
                            transition

                            ${
                                currentSessionId === session.id
                                    ? "bg-zinc-800"
                                    : "hover:bg-zinc-900"
                            }
                            `}
                        >

                            <div
                                className="
                                text-white
                                truncate
                                "
                            >

                                {session.title}

                            </div>

                        </button>

                    ))

                }

            </div>

        </div>

    );

}