import { dailyReward } from "@/public/images";
import Image from "next/image";
import React from "react";

interface dailyRewardProp {
  dailyRewardTimeLeft: string;
}

const DailyReward = ({ dailyRewardTimeLeft }: dailyRewardProp) => {
  return (
    <div className="flex w-full flex-col px-4 py-2 text-center">
      <div className="">
        <Image
          src={dailyReward}
          alt="dailyReward"
          width={48}
          height={48}
          className="mx-auto"
        />
      </div>
      <p className="text-xs">Dialy reward</p>
      <p className="mt-2 text-[10px] text-gray-400">{dailyRewardTimeLeft}</p>
    </div>
  );
};

export default DailyReward;
