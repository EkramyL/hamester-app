import { dailyCipher } from "@/public/images";
import Image from "next/image";
import React from "react";

const DailyCipher = () => {
  return (
    <div className="flex w-full flex-col px-4 py-2 text-center">
      <div className="">
        <Image
          src={dailyCipher}
          alt="dailyCipher"
          width={48}
          height={48}
          className="mx-auto"
        />
      </div>
      <p className="text-xs">Dialy Cipher</p>
      <p className="mt-2 text-[10px] text-gray-400">12:16</p>
    </div>
  );
};

export default DailyCipher;