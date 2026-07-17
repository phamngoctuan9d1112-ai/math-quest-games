"use client";
import StatusBar from "../StatusBar";
import BattleHeader from "./BattleHeader";
import BattleTopBar from "./BattleTopBar";
import BattleLayout from "./BattleLayout";
import MultipleChoice from "./MultipleChoice";
import QuestionCard from "./QuestionCard";
import TrueFalseQuestion from "./TrueFalseQuestion";
import ShortAnswerQuestion from "./ShortAnswerQuestion";
import DailyQuest from "./DailyQuest";
import WorldInfo from "./WorldInfo";
import ProgressSection from "./ProgressSection";
import Mascot from "../Mascot";

type BattleScreenProps = {

selectedWorld: number | null;

mascotState: any;

mascotMessage: string;

message: string;

showCorrectAnswer: boolean;

setSelectedSubMap: React.Dispatch<
    React.SetStateAction<number | null>
>;

setCurrentSubNode: React.Dispatch<
    React.SetStateAction<number | null>
>;

dailyProgress: number;

dailyRewardClaimed: boolean;

currentUserId: string | null;

setCoins: React.Dispatch<React.SetStateAction<number>>;

setDailyRewardClaimed: React.Dispatch<React.SetStateAction<boolean>>;

setMessage: React.Dispatch<React.SetStateAction<string>>;

shortAnswer: string;

setShortAnswer: React.Dispatch<React.SetStateAction<string>>;

showExplanation: boolean;

setShowExplanation: React.Dispatch<
    React.SetStateAction<boolean>
>;

checkShortAnswer: () => void;

handleNextShortQuestion: () => void;

    hearts:number;
    pet: string;
    coins:number;
    currentSubNode: number | null;
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

  mascotState,

    mascotMessage,

setShortAnswer,

selectedWorld,

currentSubNode,
setShowExplanation,

setSelectedSubMap,

setCurrentSubNode,

message,

showCorrectAnswer,

dailyProgress,

dailyRewardClaimed,

currentUserId,

setCoins,

setDailyRewardClaimed,

setMessage,

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

    <div className="border-t border-yellow-800" />

    <div className="px-10 py-8 space-y-8">

        <StatusBar
            hearts={hearts}
            coins={coins}
            xp={xp}
        />

        <WorldInfo
    selectedWorld={selectedWorld}
    currentSubNode={currentSubNode}
    setCurrent={setCurrent}
    setTfAnswers={setTfAnswers}
    setShortAnswer={setShortAnswer}
    setShowExplanation={setShowExplanation}
    setSelectedSubMap={setSelectedSubMap}
    setCurrentSubNode={setCurrentSubNode}
/>

        

        <p className="text-center text-sm text-gray-500">
          {pet === "🐶" && "+1 Coin mỗi câu"}
          {pet === "🐱" && "+2 Coin mỗi câu"}
          {pet === "🐉" && "+5 Coin mỗi câu"}
        </p>

         <DailyQuest
        dailyProgress={dailyProgress}
        xp={xp}
        dailyRewardClaimed={dailyRewardClaimed}
        currentUserId={currentUserId}
        setCoins={setCoins}
        setDailyRewardClaimed={setDailyRewardClaimed}
        setMessage={setMessage}
    />

    <ProgressSection

    message={message}

    showCorrectAnswer={showCorrectAnswer}

    question={question}

    current={current}

    questions={questions}

/>


       <QuestionCard
    question={question?.question ?? ""}
/>

{currentSubNode === 1 && (
    <MultipleChoice
        options={options}
        onAnswer={onAnswer}
    />
)}

{currentSubNode === 2 && (
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
)}

{currentSubNode === 3 && (
    <ShortAnswerQuestion
        question={question}
        shortAnswer={shortAnswer}
        setShortAnswer={setShortAnswer}
        showExplanation={showExplanation}
        checkShortAnswer={checkShortAnswer}
        handleNextShortQuestion={handleNextShortQuestion}
    />
)}



    </div>

    <Mascot
    state={mascotState}
    message={mascotMessage}
/>
    

</BattleLayout>

);
}