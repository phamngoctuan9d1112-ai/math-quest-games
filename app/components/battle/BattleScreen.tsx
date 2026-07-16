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

}

export default function BattleScreen({
  hearts,

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

    question="Cho tập hợp A={1,2,3}. Hỏi số phần tử của A bằng bao nhiêu?"

/>

<MultipleChoice

    options={[1,2,3,4]}

    onAnswer={(value)=>{

        alert(value);

    }}

/>

    </div>
    

</BattleLayout>

);
}