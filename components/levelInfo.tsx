"use client";

import React, { useState } from "react";
import { Progress } from "./ui/progress";

const LevelInfo = () => {
  const levelNames = [
    "Bronze", // From 0 to 4999 coins
    "Silver", // From 5000 coins to 24,999 coins
    "Gold", // From 25,000 coins to 99,999 coins
    "Platinum", // From 100,000 coins to 999,999 coins
    "Diamond", // From 1,000,000 coins to 2,000,000 coins
    "Epic", // From 2,000,000 coins to 10,000,000 coins
    "Legendary", // From 10,000,000 coins to 50,000,000 coins
    "Master", // From 50,000,000 coins to 100,000,000 coins
    "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
    "Lord", // From 1,000,000,000 coins to ∞
  ];
  const [level, setLevel] = useState(6);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="text-sm">{levelNames[level]}</p>
        <p className="text-sm">
          7<span>/10</span>
        </p>
      </div>
      <div>
        <Progress value={70} />
      </div>
    </div>
  );
};

export default LevelInfo;
