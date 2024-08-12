"use client";

import React from "react";
import DailyReward from "./dailyReward";
import DailyCipher from "./dialyCipher";
import { useState, useEffect } from "react";
import calculateTimeLeft from "@/lib/calculateTimeLeft";
const DailyPoints = () => {
  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
  const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdowns = () => {
      setDailyRewardTimeLeft(calculateTimeLeft(0)); // at 12am
      setDailyCipherTimeLeft(calculateTimeLeft(19)); // at 7pm
      setDailyComboTimeLeft(calculateTimeLeft(12)); // at 12pm
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 flex justify-between gap-2 px-4">
      <div className="w-full rounded-xl bg-[#272a2f]">
        <DailyReward dailyRewardTimeLeft={dailyRewardTimeLeft} />
      </div>
      <div className="w-full rounded-xl bg-[#272a2f]">
        <DailyCipher dailyCipherTimeLeft={dailyCipherTimeLeft} />
      </div>
      <div className="w-full bg-[#272a2f]">div3</div>
    </div>
  );
};

export default DailyPoints;
