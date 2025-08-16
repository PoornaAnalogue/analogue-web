'use client';

import { useState } from 'react';
import dayjs from 'dayjs';
import TooltipBox from './Tooltip';


const CalendarTest = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startDay = currentMonth.startOf('month').startOf('week');
  const days = [...Array(42)].map((_, i) => startDay.add(i, 'day')); //

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

  return (
          <div className='w-screen h-screen  flex xl:flex gap-5  bg-industry bg-center bg-cover  bg-no-repeat'>

            <div className='self-center m-15 p-3 items-start flex flex-col gap-5 w-3/8 '>
                <p className='font-weight-700 font-bold text-5xl'>Book Appointment <br /> for free.</p>
                <p className='leading-8 text-start  font-weight-400 text-xs'> Analogue is a Best mobile app development company in Hyderabad that
                  specialises in creating and enhancing user experience through the design and
                  development of mobile and <span className='leading-8 text-start font-weight-400 text-xs text-[#0D6EFD] '>web applications. Our focus lies in helping
                  businesses expand and reach their specific customer</span> base by collaborating
                  with individuals and organisations to conceptualise and promote their products.</p>
            </div>


            <div className='overflow-hidden box-border w-5/8  bg-flower bg-contain bg-no-repeat bg-right '>

                  {/* calender */}
                <div className='h-full overflow-hidden bg-ellipse bg-cover bg-right bg-bottom bg-no-repeat'>


                  <div className=" mx-20 relative p-2 mt-20  bg-white rounded-md shadow-xl box-border  w-[340px] h-[320px]">
                    <div className='h-2 mb-2 bg-dots bg-left bg-contain bg-no-repeat '></div>
                {/* //   * Header with month and navigation */}
                <div className=" w-full   flex justify-between text-black items-center mb-3">
                  <button onClick={handlePrevMonth} className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                    ←
                  </button>
                  <h2 className="text-mg font-medium">
                    {currentMonth.format('MMMM YYYY')}
                  </h2>
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
                    const isCurrentMonth = day.month() === currentMonth.month()
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
                          ${isToday && !isSelected ? 'bg-gray-200' : ''}
                        `}
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
          </div>
  );
};

export default CalendarTest;
