type Story = {

    title: string;

    image: string;

    text: string;

};

export default function StoryModal({

    story,

    onNext,

}:{

    story: Story;

    onNext:()=>void;

}){

    return(

        <div className="fixed inset-0 z-[9999]">

    <img
        src="/story/background.jpg"
        className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

    <div className="relative flex items-center justify-center h-full">

            <div
    className="
    relative
    w-[1050px]
    max-w-[92%]
    rounded-3xl
    border-4
    border-yellow-500
    bg-[#081B39]
    shadow-2xl
    p-10
    "
>

                <h2
    className="
    text-6xl
    font-extrabold
    text-center
    text-yellow-100
    tracking-widest
    mb-10
    "
>

                    {story.title}

                </h2>

                <div className="grid grid-cols-2 gap-10 items-center">

    <img
        src={story.image}
        className="
        w-full
        rounded-xl
        shadow-2xl
        border-2
        border-yellow-400
        "
    />

    <p
        className="
        whitespace-pre-line
        text-2xl
        leading-10
        text-gray-100
        "
    >
        {story.text}
    </p>

</div>

                <button

                    onClick={onNext}

                    className="
mt-10
mx-auto
block
px-16
py-4
rounded-xl
text-2xl
font-bold
bg-gradient-to-r
from-blue-700
to-blue-500
hover:scale-105
transition
text-white
border-2
border-yellow-300
shadow-xl
"

                >

                    Tiếp tục

                </button>

            </div>

        </div>
        </div>

    );

}