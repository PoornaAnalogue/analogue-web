'use client';

import { useState } from 'react';
import dayjs from 'dayjs';
import TooltipBox from './Tooltip'; // Assuming this is your Tooltip component

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startDay = currentMonth.startOf('month').startOf('week');
  const days = [...Array(42)].map((_, i) => startDay.add(i, 'day'));

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

  return (
    <div className="w-screen h-screen flex gap-5 bg-gray-900 bg-center bg-cover bg-no-repeat"> {/* Changed to solid color for testing */}
      <div className="self-center m-15 p-3 items-start flex flex-col gap-5 w-2/5">
        <p className="font-bold text-5xl">
          Book Appointment <br /> for free.
        </p>
        <p className="leading-8 text-start font-normal text-xs">
          Analogue is a Best mobile app development company in Hyderabad that
          specialises in creating and enhancing user experience through the design
          and development of mobile and{' '}
          <span className="leading-8 text-start font-normal text-xs text-[#0D6EFD]">
            web applications. Our focus lies in helping businesses expand and
            reach their specific customer
          </span>{' '}
          base by collaborating with individuals and organisations to
          conceptualise and promote their products.
        </p>
      </div>

      <div className="box-border w-3/5 relative">
        {/* Calendar with SVG Glow */}
        <svg className="absolute -top-5 -left-5 w-[390px] h-[355px] pointer-events-none">
          <defs>
            <filter id="whiteGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect
            x="0"
            y="0"
            width="340px"
            height="305px"
            fill="white"
            filter="url(#whiteGlow)"
            opacity="0.5"
          />
        </svg>
        <div
          className="bg-white relative p-2 mt-20 rounded-md box-border w-[340px] h-[305px]"
        >
          {/* Header with month and navigation */}
          <div className="w-full flex justify-between text-black items-center mb-3">
            <button
              onClick={handlePrevMonth}
              className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              ←
            </button>
            <h2 className="text-lg font-medium">{currentMonth.format('MMMM YYYY')}</h2>
            <button
              onClick={handleNextMonth}
              className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              →
            </button>
          </div>
          {/* Day labels */}
          <div className="w-full grid grid-cols-7 gap-1 text-center text-gray-600 text-sm font-medium mb-1">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>
          {/* Calendar days */}
          <div className="w-full grid grid-cols-7 gap-1 text-center text-gray-600">
            {days.map((day, i) => {
              const isToday = day.isSame(dayjs(), 'day');
              const isSelected = day.isSame(selectedDate, 'day');
              const isCurrentMonth = day.month() === currentMonth.month();
              return (
                <div
                  key={i}
                  onClick={() => {
                    const now = dayjs();
                    const updatedDate = day.hour(now.hour()).minute(now.minute());
                    setSelectedDate(updatedDate);
                  }}
                  className={`cursor-pointer text-black p-2 rounded-md transition text-sm
                    ${isSelected ? 'bg-gray-900 text-white' : ''}
                    ${!isCurrentMonth ? 'text-gray-400' : ''}
                    ${isToday && !isSelected ? 'bg-gray-200' : ''}`}
                >
                  {day.date()}
                </div>
              );
            })}
          </div>
          {/* Tooltip */}
          <div className="mt-6">
            <TooltipBox date={selectedDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;