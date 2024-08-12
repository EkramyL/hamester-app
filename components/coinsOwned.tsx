"use client";
import { dollarCoin, mainCharacter } from "@/public/images";
import React, { useState } from "react";
import Image from "next/image";

const CoinsOwned = () => {
  const [points, setPoints] = useState(22334567);
  const [clicks, setClicks] = useState<{ id: number }[]>([]);
  const pointsToAdd = 11;

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;

    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now() }]);
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2">
        {" "}
        <div>
          <Image src={dollarCoin} width={30} height={30} alt="dollarCoin" />
        </div>
        <span className="text-3xl"> {points.toLocaleString()}</span>
      </div>
      <div className="mt-4 flex justify-center">
        <div
          onClick={handleCardClick}
          className="flex h-80 w-80 items-center justify-center rounded-full bg-slate-500 bg-gradient-to-b from-[#575def] to-[#202731] p-3"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle,#4960b2,#282e3e)] shadow-lg">
            <div>
              <Image src={mainCharacter} alt="hamster" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsOwned;
