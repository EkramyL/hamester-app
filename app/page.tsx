import DailyReward from "@/components/dailyReward";
import DailyCipher from "@/components/dialyCipher";
import Infobar from "@/components/infobar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Infobar />
      <div className="relative mt-3 flex-1 rounded-t-[48px] bg-[#f3ba2f] shadow-2xl">
        <div className="absolute bottom-0 left-0 right-0 top-[2px] rounded-t-[48px] bg-[#1c1f24]">
          <div className="mt-6 flex justify-between gap-2 px-4">
            <div className="w-full rounded-xl bg-[#272a2f]">
              <DailyReward />
            </div>
            <div className="w-full rounded-xl bg-[#272a2f]">
              <DailyCipher />
            </div>
            <div className="w-full bg-[#272a2f]">div3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
