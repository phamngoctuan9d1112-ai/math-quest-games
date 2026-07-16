"use client";
import StatusBar from "../StatusBar";
import BattleHeader from "./BattleHeader";
import BattleTopBar from "./BattleTopBar";
import BattleLayout from "./BattleLayout";
import MultipleChoice from "./MultipleChoice";
import QuestionCard from "./QuestionCard";
import TrueFalseQuestion from "./TrueFalseQuestion";
import ShortAnswerQuestion from "./ShortAnswerQuestion";

type BattleScreenProps = {



shortAnswer: string;

setShortAnswer: React.Dispatch<React.SetStateAction<string>>;

showExplanation: boolean;

checkShortAnswer: () => void;

handleNextShortQuestion: () => void;

    hearts:number;
    pet: string;
    coins:number;

    xp:number;

    musicOn:boolean;

    setMusicOn:React.Dispatch<React.SetStateAction<boolean>>;

    

    options:(string|number)[];

    onAnswer:(value:string|number)=>void;

     // thêm
    question:any;
    questions:any[];
    current:number;

    tfAnswers: Record<string, "Đúng" | "Sai">;

    setTfAnswers: React.Dispatch<
    React.SetStateAction<
        Record<string, "Đúng" | "Sai">
    >
>;

    checkTrueFalseAnswer:()=>void;

    showTFAnswer:boolean;

    setShowTFAnswer:React.Dispatch<
        React.SetStateAction<boolean>
    >;

    setCurrent:React.Dispatch<
        React.SetStateAction<number>
    >;

    moveToNextQuestion:()=>void;

}

export default function BattleScreen({
  hearts,

  shortAnswer,

setShortAnswer,

showExplanation,

checkShortAnswer,

handleNextShortQuestion,

  question,

options,
pet,
onAnswer,

    coins,

    xp,

    musicOn,

  
    questions,
    current,

    tfAnswers,
    setTfAnswers,

    checkTrueFalseAnswer,

    showTFAnswer,
    setShowTFAnswer,

    setCurrent,

    moveToNextQuestion,

    setMusicOn,
}: BattleScreenProps) {
  return (

<BattleLayout>

    <BattleHeader
        musicOn={musicOn}
        setMusicOn={setMusicOn}
    />

    <div className="p-8">

        <StatusBar
            hearts={hearts}
            coins={coins}
            xp={xp}
        />

        <p className="text-center text-sm text-gray-500">
          {pet === "🐶" && "+1 Coin mỗi câu"}
          {pet === "🐱" && "+2 Coin mỗi câu"}
          {pet === "🐉" && "+5 Coin mỗi câu"}
        </p>


        <QuestionCard
    question={question}
/>

<MultipleChoice
    options={options}
    onAnswer={onAnswer}
/>



<TrueFalseQuestion

    question={question}

    tfAnswers={tfAnswers}

    setTfAnswers={setTfAnswers}

    checkTrueFalseAnswer={checkTrueFalseAnswer}

    showTFAnswer={showTFAnswer}

    setShowTFAnswer={setShowTFAnswer}

    current={current}

    questions={questions}

    setCurrent={setCurrent}

    moveToNextQuestion={moveToNextQuestion}

/>


    </div>
    

</BattleLayout>

);
}