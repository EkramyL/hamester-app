import React from "react";
import LevelInfo from "./levelInfo";

const Infobar = () => {
  return (
    <div className="flex w-full gap-2">
      <div className="flex w-1/4 flex-col items-center">
        <div className="w-full">
          <LevelInfo />
        </div>
        <div></div>
      </div>
      <div className="flex w-3/4 bg-slate-400">second div</div>
    </div>
  );
};

export default Infobar;
