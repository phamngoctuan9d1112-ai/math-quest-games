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

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">

            <div className="bg-white rounded-3xl p-8 w-[700px] max-w-[95%]">

                <h2 className="text-3xl font-bold">

                    {story.title}

                </h2>

                <img

                    src={story.image}

                    className="w-full rounded-xl mt-5"

                />

                <p className="mt-5 whitespace-pre-line text-lg">

                    {story.text}

                </p>

                <button

                    onClick={onNext}

                    className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl"

                >

                    Tiếp tục

                </button>

            </div>

        </div>

    );

}