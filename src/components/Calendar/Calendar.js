import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import "./Calendar.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="calendar__container">
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          increaseYear,
          decreaseYear,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div className="calendar__wrapper">
            <div className="calendar__content_year">
              <button
                className="calendar__btn_arrow"
                onClick={decreaseYear}
                disabled={prevMonthButtonDisabled}
              >
                <div className="calendar__left_icon" />
              </button>
              <p>{getYear(date)}</p>
              <button
                className="calendar__btn_arrow"
                onClick={increaseYear}
                disabled={prevMonthButtonDisabled}
              >
                <div className="calendar__right_icon" />
              </button>
            </div>

            <div className="calendar__content_month">
              <button
                className="calendar__btn_arrow"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <div className="calendar__left_icon" />
              </button>
              <p>{months[getMonth(date)]}</p>

              <button
                className="calendar__btn_arrow"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <div className="calendar__right_icon" />
              </button>
            </div>
          </div>
        )}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <div className="calendar__btn_container">
        <button className="calendar__btn_cancel">Cancel</button>
        <button className="calendar__btn_filter">Filter</button>
      </div>
    </div>
  );
};

export default Calendar;
