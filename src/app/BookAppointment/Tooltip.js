// import React from 'react';

// const TooltipBox = ({ date }) => {
//   return (
//     <div className=" border-white absolute w-full  top-[10%] left-0 h-[80%] pointer-events-none">
//       <div className=" text-white bg-[#2D6096] animate-triangle-path  text-slate-800 p-4 rounded-xl w-40 shadow-md text-xs leading-relaxed flex flex-col items-center gap-2 ">
//         <div className="font-semibold text-xs mb-1 underline decoration-white underline-offset-12 ">Free Booking</div>
//         <p>
//           {date.format('dddd')}, {date.format('MMMM D')}<br />
//           09:30 AM - 07:00 PM <br />
//           Analogue Office
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TooltipBox;



import React from 'react';

const TooltipBox = ({ date }) => {
  return (
    <div className=" absolute w-full top-0 left-1/2 -translate-x-1/2 h-auto pointer-events-none ">
      <div className=" text-white bg-[#7794b8] border border-white animate-triangle-path text-xs leading-relaxed flex flex-col items-center gap-1 xs:gap-1  p-1 md:p-3  rounded-xl xss:w-[90px] xs:w-[80px] sm:w-[80px] md:w-[110px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px] 3xl:w-[180px] shadow-md transform-origin-center">
        <div className="font-semibold text-center text-[0.5rem] md:text-xs lg:text-sm mb-0.5 xs:mb-0.5  md:mb-1 ">
            {/* underline decoration-white underline-offset-4 xs:underline-offset-4 sm:underline-offset-5 md:underline-offset-6 lg:underline-offset-8 xl:underline-offset-8 2xl:underline-offset-12 */}
          Free Booking
        <hr className='w-[145] xss:w-[70] xs:w-[60] md:w-[90] lg:w-[110] mt-2'/>
        </div>
        <p className="text-[0.4rem] sm:text-[0.4rem] md:text-[0.5rem] lg:text-xs xl:text-xs text-center">
          {date.format('dddd')}, {date.format('MMMM D')}<br />
          09:30 AM - 07:00 PM <br />
          Analogue Office
        </p>
      </div>
    </div>
  );
};

export default TooltipBox;