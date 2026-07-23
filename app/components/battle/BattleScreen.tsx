"use client";
import StatusBar from "../StatusBar";
import BattleHeader from "./BattleHeader";
import BattleTopBar from "./BattleTopBar";
import BattleLayout from "./BattleLayout";
import MultipleChoice from "./MultipleChoice";
import QuestionCard from "./QuestionCard";
import TrueFalseQuestion from "./TrueFalseQuestion";
import ShortAnswerQuestion from "./ShortAnswerQuestion";
import AISolution from "../AISolution";
import WorldInfo from "./WorldInfo";
import ProgressSection from "./ProgressSection";
import Mascot from "../Mascot";

type BattleScreenProps = {

    shield:number;
scroll:number;
book:number;
magicStone:number;
potion:number;
useShield: () => void;
useScroll: () => void;
useBook: () => void;
useMagicStone: () => void;
usePotion: () => void;
hiddenOptions:number[];
setShield: React.Dispatch<React.SetStateAction<number>>;
setScroll: React.Dispatch<React.SetStateAction<number>>;
setBook: React.Dispatch<React.SetStateAction<number>>;
setMagicStone: React.Dispatch<React.SetStateAction<number>>;
setPotion: React.Dispatch<React.SetStateAction<number>>;

selectedWorld: number | null;
showAI: boolean;

setShowAI: React.Dispatch<
  React.SetStateAction<boolean>
>;

aiLoading: boolean;

aiAnswer: string;

handleAskAI: () => void;
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

setHearts:React.Dispatch<
React.SetStateAction<number>
>;
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
setHearts,
  shortAnswer,

  mascotState,
hiddenOptions,
    mascotMessage,
useShield,
useScroll,
useBook,
useMagicStone,
usePotion,
setShortAnswer,

selectedWorld,
 shield,
scroll,
book,
magicStone,
potion,
showAI,
setShowAI,
aiLoading,
aiAnswer,
handleAskAI,

setShield,
setScroll,
setBook,
setMagicStone,
setPotion,

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

    <div
className="
max-w-[900px]
mx-auto

px-3
py-3

space-y-3
"
>

        <StatusBar
            hearts={hearts}
            coins={coins}
            xp={xp}
        />

        <div
className="
flex
justify-center

my-4

lg:hidden
"
>

    <Mascot
        state={mascotState}
        message={mascotMessage}
    />
</div>
<div className="flex gap-3 justify-center mb-4">

<button
onClick={() => {
    useShield();
}}
>
🛡️ {shield}
</button>

<button
onClick={() => {
    useScroll();
}}
>
📜 {scroll}
</button>
<button
onClick={()=>{
    useBook();
}}
>
📖 {book}
</button>

<button
onClick={()=>{
    useMagicStone();
}}
>
💎 {magicStone}
</button>

<button
onClick={()=>{
    usePotion();
}}
>
🧪 {potion}
</button>
</div>

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
<div className="flex justify-end mb-3">
  <button
    onClick={handleAskAI}
    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl"
  >
    🤖 Gia sư AI
  </button>
</div>
{currentSubNode === 1 && (
    <MultipleChoice
        options={options}
        onAnswer={onAnswer}
         hiddenOptions={hiddenOptions}
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

  
    <div
className="
hidden
lg:block

fixed
bottom-4
right-4

scale-75

z-50
"
>
    <Mascot
        state={mascotState}
        message={mascotMessage}
    />
</div>
  
<AISolution
  open={showAI}
  loading={aiLoading}
  answer={aiAnswer}
  onClose={() => setShowAI(false)}
/>
</BattleLayout>

);
}