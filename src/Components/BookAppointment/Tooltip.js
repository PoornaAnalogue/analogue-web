import React from 'react';

const TooltipBox = ({ date }) => {
  return (
    <div className=" absolute w-full  top-[10%] left-0 h-[80%] pointer-events-none">
      <div className=" text-white bg-[#2D6096] animate-triangle-path  text-slate-800 p-4 rounded-xl w-40 shadow-md text-xs leading-relaxed flex flex-col items-center gap-2 ">
        <div className="font-semibold text-sm mb-1 underline decoration-white underline-offset-12 ">Free Booking</div>
        <p>
          {date.format('dddd')}, {date.format('MMMM D')}<br />
          09:30 AM - 07:00 PM <br />
          Analogue Office
        </p>
      </div>
    </div>
  );
};

export default TooltipBox;
