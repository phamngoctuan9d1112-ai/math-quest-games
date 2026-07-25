"use client";

type Props = {
    onClose: () => void;
};

export default function PauseMenu({
    onClose,
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
                "
            >
                <h2 className="text-white text-2xl font-bold">
                    Tạm dừng
                </h2>

                <button
                    onClick={onClose}
                    className="
                    mt-6
                    bg-blue-600
                    px-5
                    py-2
                    rounded-xl
                    text-white
                    "
                >
                    Tiếp tục
                </button>
            </div>
        </div>
    );
}