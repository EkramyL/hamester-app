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
    "Lord", // From 1,000,000,000 coins to 18,000,000,000
    "Creator", // From 18,000,000,000 coins to ...
  ];
  const levelMinPoints = [
    0, // Bronze
    5000, // Silver
    25000, // Gold
    100000, // Platinum
    1000000, // Diamond
    2000000, // Epic
    10000000, // Legendary
    50000000, // Master
    100000000, // GrandMaster
    1000000000, // Lord
    1800000000, // Creator
  ];
  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(22749365);

  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const nextMinPoints = levelMinPoints[levelIndex + 1];
    const currentProgress = (points / nextMinPoints) * 100;
    return Math.min(currentProgress, 100);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="text-[10px]">{levelNames[levelIndex]}</p>
        <p className="text-[10px]">
          {levelIndex + 1}
          <span>/{levelNames.length}</span>
        </p>
      </div>
      <div>
        <Progress value={calculateProgress()} />
      </div>
    </div>
  );
};

export default LevelInfo;
