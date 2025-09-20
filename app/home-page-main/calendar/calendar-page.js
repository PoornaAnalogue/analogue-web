"use client";
import { useState } from "react";
import dayjs from "dayjs";
import TooltipBox from "./tooltip";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startDay = currentMonth.startOf("month").startOf("week");
  const days = [...Array(42)].map((_, i) => startDay.add(i, "day"));

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const handleDateSelect = (day) => {
    // Only allow selection if the date is today or in the future
    if (!day.isBefore(dayjs(), "day")) {
      const now = dayjs();
      const updatedDate = day.hour(now.hour()).minute(now.minute());
      setSelectedDate(updatedDate);
      // Scroll to form section on same page with slight delay
      setTimeout(() => {
        const formSection = document.getElementById("form-section");
        if (formSection) {
          formSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }
      }, 500);
    }
  };

  return (
    <>
      <div className="md:px-0 3xl:pb-10  w-full sm:px-0 px-6 h-auto flex flex-col xl:flex-row xl:h-auto lg:px-0  xl:gap-5 2xl:gap-0 bg-calendar bg-center bg-cover bg-no-repeat box-border justify-center  ">
        <div className=" self-center 2xl:mr-0 mx-0 xs:mx-3 md:mx-2 lg:mx-0 xl:mx-8 2xl:mx-15 py-2  xl:py-7  flex flex-col gap-2 sm:gap-4 xl:gap-2 3xl:gap-6  w-full xs:w-full sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-5/12 3xl:py-12 max-w-full 2xl:mx-0 3xl:ml-20 ">
          <h2 className="text-white font-bold text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] leading-tight">
            Book Appointment <br /> for free.
          </h2>
          <h3 className="font-weight-400 text-[#0D6EFD] text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium ">
            Choose the Best Mobile App Developers in Hyderabad and Beyond
          </h3>
          <p
            className="text-white text-start font-normal
        text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base leading-4 xss:leading-5  sm:leading-6  "
          >
            <span className="font-medium">
              Are you searching for top mobile app developers? Look no further
              than Analogue! As a leading app development company in Hyderabad,
              we offer innovative solutions tailored to your unique business
              needs, serving clients worldwide.
            </span>
            <br />
            <br /> Our expert team leverages the latest technologies to deliver
            exceptional mobile app development services across Android, iOS, and
            hybrid platforms. With a strong presence in Hyderabad, we are
            trusted by businesses globally for delivering high-quality and
            user-friendly apps. Partner with Analogue for unparalleled service
            and expertise that sets us apart as one of the best mobile app
            developers in the industry.
          </p>
        </div>
        <div className=" test:mr-10 sm:mr-0  xss:pt-3 md:h-[20rem] xss:h-[15rem] xs:h-[16rem] sm:h-[18rem] md:h-[23rem] lg:h-[25rem] xl:mr-0 xl:pr-0 h-full w-full self-center w-full  mb-3  sm:w-9/12 md:w-8/12 lg:w-8/12 xl:w-6/12 2xl:w-6/12 3xl:w-6/12 max-w-full bg-flower  3xl:mr-30 bg-contain bg-no-repeat bg-right xl:h-[28rem] 2xl:h-[32rem] 3xl:h-[35rem] xll:mr-20">
          <div className="">
            <div className="test:left-[70px] xss:bottom-[5px] xss:right-[0px] xxs:left-[30px] xs:bottom-[20px] xs:right-[0px] sm:bottom-[15px] sm:left-[25px] smm:left-[50px] test2:left-[110px] md:left-[0px] lg:left-[30px] test4:left-[60px] test5:left-[170px] xl:-left-[10px] xll:left-[20px] 2xl:-right-[20px] 2xl:bottom-[10px] 2xxl:left-[90px] items-center    mx-2 xs:mx-3 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-2 2xl:mx-10 3xl:mx-14  xs:mt-5 sm:mt-6 md:mt-8 xl:mt-15  relative p-1 xs:p-2 sm:p-3 md:p-4 xl:bottom-[40px] 3xl:bottom-[0px] 3xl:left-[80px] bg-white rounded-md shadow-xl box-border  w-[240px] xss:w-[150px] xs:w-[160px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] 3xl:w-[330px] xss:h-[140px]   xs:h-[150px] sm:h-[160px] md:h-[200px] lg:h-[220px] xl:h-[250px] 3xl:h-[300px] ">
              <div className="h-1 xs:h-1 mb-1 xs:mb-1 xl:h-2 xl:mb-2 bg-dots bg-left bg-contain bg-no-repeat"></div>
              {/* Header with month and navigation */}
              <div className="w-full flex justify-between text-black items-center mb-1 xs:mb-2 ">
                <button
                  suppressHydrationWarning
                  onClick={handlePrevMonth}
                  className="text-[0.5rem]  md:text-xs 3xl:text-lg  px-1 xs:px-2 sm:px-2 md:px-3 xl:px-4 2xl:px-4 3xl:px-5 py-0.5 xs:py-1 sm:py-1  bg-gray-200 rounded hover:bg-gray-300"
                >
                  ←
                </button>
                <h2 className="text-xs xss:font-light xss:text-[0.6rem] sm:text-xs md:text-md lg:text-base 3xl:text-xl font-medium">
                  {currentMonth.format("MMMM YYYY")}
                </h2>
                <button
                  suppressHydrationWarning
                  onClick={handleNextMonth}
                  className="text-[0.5rem]  md:text-xs lg:text-sm 3xl:text-lg   px-1 xs:px-2 sm:px-2 md:px-3 xl:px-4 2xl:px-4 3xl:px-5 py-0.5 xs:py-1 sm:py-1  bg-gray-200 rounded hover:bg-gray-300"
                >
                  →
                </button>
              </div>
              {/* Day labels */}
              <div className="  w-full grid grid-cols-7 gap-0.5 sm:gap-1 text-center md:text-[0.6rem] text-gray-600 text-[0.6rem] xl:text-sm   3xl:text-base  font-medium mb-1  ">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>
              {/* Calendar days */}
              <div className="w-full grid grid-cols-7 gap-0.5  text-center text-gray-600">
                {days.map((day, i) => {
                  const isToday = day.isSame(dayjs(), "day");
                  const isSelected = day.isSame(selectedDate, "day");
                  const isCurrentMonth = day.month() === currentMonth.month();
                  const isPast = day.isBefore(dayjs(), "day");
                  return (
                    <div
                      key={i}
                      onClick={() => !isPast && handleDateSelect(day)}
                      className={`font-semibold text-black md:p-0.5  lg:p-1 rounded-md transition text-[0.5rem]  md:text-[0.6rem] xl:text-xs   3xl:text-sm
                      ${isSelected ? "bg-gray-900 text-white" : ""}
                      ${
                        isPast
                          ? "text-gray-400 no-custom-cursor cursor-not-allowed"
                          : "cursor-pointer"
                      }
                      ${!isCurrentMonth ? "text-gray-400 cursor-pointer" : ""}
                      ${isToday && !isSelected && !isPast ? "bg-gray-200" : ""}
                    `}
                    >
                      {day.date()}
                    </div>
                  );
                })}
              </div>
              {/* Tooltip */}
              <div className=" mt-1 sm:mt-2 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-7 w-full max-w-full">
                <div className="w-[85%] sm:w-[90%] md:w-[92%] lg:w-[94%] xl:w-[95%] 2xl:w-[96%] 3xl:w-[97%] mx-auto">
                  <TooltipBox date={selectedDate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarPage;
