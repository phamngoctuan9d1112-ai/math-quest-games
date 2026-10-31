"use client";

type Props = {
    onClose: () => void;
    onExit?: () => void;
};

export default function PauseMenu({
    onClose,
    onExit,
}: Props) {
    return (
        <div
            className="
            absolute
            inset-0
            bg-black/70
            flex
            items-center
            justify-center
            z-50
            "
        >
            <div
                className="
                bg-zinc-900
                rounded-2xl
                p-8
                text-center
                "
            >
                <h2 className="text-white text-2xl font-bold">
                    Tạm dừng
                </h2>

                <div className="mt-6 flex flex-col gap-3">
                    <button
                        onClick={onClose}
                        className="
                        bg-blue-600
                        px-5
                        py-2
                        rounded-xl
                        text-white
                        cursor-pointer
                        "
                    >
                        Tiếp tục
                    </button>

                    {onExit && (
                        <button
                            onClick={onExit}
                            className="
                            bg-red-600
                            px-5
                            py-2
                            rounded-xl
                            text-white
                            cursor-pointer
                            "
                        >
                            Thoát mini game
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
