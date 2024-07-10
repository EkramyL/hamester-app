import React from "react";
import LevelInfo from "./levelInfo";
import ProfitHour from "./profitHour";

const Infobar = () => {
  return (
    <div className="flex w-full gap-4 px-4">
      <div className="flex w-1/4 flex-col items-center">
        <div className="w-full">
          <LevelInfo />
        </div>
        <div></div>
      </div>
      <div className="flex w-3/4 rounded-full border-2 border-[#54472d] bg-gradient-to-b from-[#33302b] to-[#54472d]">
        <ProfitHour />
      </div>
    </div>
  );
};

export default Infobar;
