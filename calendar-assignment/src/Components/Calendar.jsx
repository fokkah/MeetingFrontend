import React, { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  const cells = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    cells.push(<td key={"empty" + i}></td>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(<td key={day}>{day}</td>);
  }

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(<tr key={i}>{cells.slice(i, i + 7)}</tr>);
  }

  return (
    <div className="container mt-4">
      <div>
        <button onClick={prevMonth}>&lt;</button>
        <span style={{ margin: "0 1rem" }}>
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Calendar;