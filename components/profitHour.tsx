import Image from "next/image";
import React from "react";
import { binanceLogo, dollarCoin } from "@/public/images";
import { Separator } from "./ui/separator";
import Info from "@/icons/Info";
import Setting from "@/icons/Setting";

const ProfitHour = () => {
  const profitPerHour = "126.34k"; //126345;
  return (
    <div className="my-1 flex w-full items-center px-2">
      <div>
        <Image src={binanceLogo} width={24} height={24} alt="binance" />
      </div>
      <Separator orientation="vertical" className="mx-2 bg-[#8b8160]" />
      <div className="my-0 flex-1 py-0">
        <div className="flex flex-col items-center justify-center justify-items-center text-center">
          <p className="text-[8px] font-bold text-gray-400">profit per hour</p>
          <div className="flex items-center gap-1">
            <div>
              <Image src={dollarCoin} width={14} height={14} alt="dollarCoin" />
            </div>
            <p className="text-sm">+{profitPerHour}</p>
            <Info size={14} className="text-[#645b40]" />
          </div>
        </div>
      </div>
      <Separator orientation="vertical" className="mx-2 bg-[#645b40]" />
      <Setting />
    </div>
  );
};

export default ProfitHour;
