import React from "react";

export default function SideBar({
  cardholderName,
  cardNumber,
  expiryMonth,
  expiryYear,
  cvc,
}) {
  return (
    <div className="font-display">
      <div className="relative h-[400px] md:h-screen w-full font-display">
        <div className="relative block md:hidden">
          <img
            src="/images/bg-main-mobile.png"
            alt="Mobile BG"
            className="w-full h-auto"
          />
        </div>

        <div className="relative hidden md:block">
          <img
            src="/images/bg-main-desktop2.png"
            alt="Desktop BG"
            className="w-"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col gap-6 items-start justify-center px-6 md:px-20 z-50 pointer-events-none"> 
      <div className="absolute left-[5%] top-[20%] z-1 md:top-[25%] md:left-[10%]">
        <img
          src="images/bg-card-front.png"
          alt="credit card front"
          className="shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),_0_30px_60px_-30px_rgba(0,0,0,0.3)] w-80"
        />
        <div className="absolute left-[8%] top-[5%]">
          <img src="images/card-logo.svg" alt="credit card logo" />
          <div className="text-white text-[22px] tracking-wider font-mono mt-10 text-center w-full max-w-[100%] overflow-hidden break-words">
            {cardNumber}
          </div>
          <div className="flex items-center justify-between mt-4 text-sm text-white font-semibold tracking-wide w-full relative">
            <p className="uppercase max-w-[60%] truncate">
              {cardholderName.trim() ? cardholderName : "Jane Appleseed"}
            </p>
            <p className="absolute right-0 top-0 whitespace-nowrap">
              {expiryMonth || "00"}/{expiryYear || "00"}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-[10%] top-[5.5%] md:top-[55%] md:left-[15%]">
        <img
          src="images/bg-card-back.png"
          alt="credit card back"
          className="shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),_0_30px_60px_-30px_rgba(0,0,0,0.3)] w-80"
        />
        <div className="absolute right-[12%] top-[43%] text-white">{cvc}</div>
      </div>
      </div>
    </div>
  );
}
