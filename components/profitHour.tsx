import Image from "next/image";
import React from "react";
import { binanceLogo } from "@/public/images";
import { Separator } from "./ui/separator";

const ProfitHour = () => {
  const profitPerHour = 126345;
  return (
    <div className="flex w-full px-2 py-2">
      <Image src={binanceLogo} width={24} height={24} alt="binance" />
      <Separator orientation="vertical" className="mx-2 bg-[#645b40]" />
      <div className="flex-1">Profit </div>
      <Separator orientation="vertical" className="mx-2 bg-[#645b40]" />
      <Image src={binanceLogo} width={24} height={24} alt="binance" />
    </div>
  );
};

export default ProfitHour;
