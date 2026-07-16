"use client";
import StatusBar from "../StatusBar";
import BattleHeader from "./BattleHeader";
import BattleLayout from "./BattleLayout";

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

    </div>

</BattleLayout>

);
}