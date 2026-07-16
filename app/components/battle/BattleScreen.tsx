"use client";
import StatusBar from "../StatusBar";
import BattleHeader from "./BattleHeader";
import BattleTopBar from "./BattleTopBar";
import BattleLayout from "./BattleLayout";
import MultipleChoice from "./MultipleChoice";
import QuestionCard from "./QuestionCard";

type BattleScreenProps = {

    hearts:number;

    coins:number;

    xp:number;

    musicOn:boolean;

    setMusicOn:React.Dispatch<React.SetStateAction<boolean>>;

    question:string;

    options:(string|number)[];

    onAnswer:(value:string|number)=>void;

}

export default function BattleScreen({
  hearts,

  question,

options,

onAnswer,

    coins,

    xp,

    musicOn,

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

        <QuestionCard
    question={question}
/>

<MultipleChoice
    options={options}
    onAnswer={onAnswer}
/>

    </div>
    

</BattleLayout>

);
}