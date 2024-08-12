import { binanceLogo, mineIcon } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LowerNav = () => {
  return (
    <div className="flex w-full items-center justify-around">
      <Link
        href={"/"}
        className="flex w-1/5 flex-col items-center justify-center gap-[2px] rounded-2xl bg-[#1c1f24] p-1 text-center"
      >
        <Image src={binanceLogo} height={20} width={20} alt="binanceLogo" />
        <p className="text-[9px] font-normal">Exchange</p>
      </Link>

      <Link
        href={"/"}
        className="flex w-1/5 flex-col items-center justify-center gap-[2px] rounded-2xl bg-[#272a2f] p-1 text-center"
      >
        <Image src={mineIcon} height={20} width={20} alt="mineIcon" />
        <p className="text-[9px] font-normal">Exchange</p>
      </Link>
      <Link
        href={"/"}
        className="flex w-1/5 flex-col items-center justify-center gap-[2px] rounded-2xl bg-[#272a2f] p-1 text-center"
      >
        <Image src={binanceLogo} height={20} width={20} alt="binanceLogo" />
        <p className="text-[9px] font-normal">Exchange</p>
      </Link>
      <Link
        href={"/"}
        className="flex w-1/5 flex-col items-center justify-center gap-[2px] rounded-2xl bg-[#272a2f] p-1 text-center"
      >
        <Image src={binanceLogo} height={20} width={20} alt="binanceLogo" />
        <p className="text-[9px] font-normal">Exchange</p>
      </Link>
      <Link
        href={"/"}
        className="flex w-1/5 flex-col items-center justify-center gap-[2px] rounded-2xl bg-[#272a2f] p-1 text-center"
      >
        <Image src={binanceLogo} height={20} width={20} alt="binanceLogo" />
        <p className="text-[9px] font-normal">Exchange</p>
      </Link>
    </div>
  );
};

export default LowerNav;
