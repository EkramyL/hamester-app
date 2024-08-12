import CoinsOwned from "@/components/coinsOwned";
import DailyPoints from "@/components/dailyPoints";

import Infobar from "@/components/infobar";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Infobar />
      <div className="relative mt-3 flex-1 rounded-t-[48px] bg-[#f3ba2f] shadow-2xl">
        <div className="absolute bottom-0 left-0 right-0 top-[2px] rounded-t-[48px] bg-[#1c1f24]">
          <DailyPoints />
          <div className="mt-4 flex justify-center">
            <CoinsOwned />
          </div>
        </div>
      </div>
    </div>
  );
}
