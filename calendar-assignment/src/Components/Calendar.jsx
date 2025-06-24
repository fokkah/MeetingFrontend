import React, { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function Calendar({ onAddMeeting }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  // Meeting form state
  const [title, setTitle] = useState("");
  const [where, setWhere] = useState("");
  const [description, setDescription] = useState("");

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  }

  // Handle date click
  function handleDateClick(day) {
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setTitle("");
    setWhere("");
    setDescription("");
  }

  // Handle meeting form submit
  function handleMeetingSubmit(e) {
    e.preventDefault();
    if (typeof onAddMeeting === "function") {
      onAddMeeting({
        date: selectedDate.toLocaleDateString(),
        title,
        where,
        description,
      });
    }
    setSelectedDate(null);
  }

  // Render calendar cells
  const cells = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    cells.push(<td key={"empty" + i}></td>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(
      <td
        key={day}
        style={{
          cursor: "pointer",
          background:
            selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getFullYear() === currentYear
              ? "#e0f7fa"
              : undefined,
        }}
        onClick={() => handleDateClick(day)}
      >
        {day}
      </td>
    );
  }

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(<tr key={i}>{cells.slice(i, i + 7)}</tr>);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "80vh",
        width: "100vw",
      }}
    >
      <div style={{ minWidth: "340px" }}>
        <button onClick={prevMonth}>{"<"}</button>
        <span style={{ margin: "0 1rem" }}>
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={nextMonth}>{">"}</button>
        <table>
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
      {/* Meeting form below calendar */}
      {selectedDate && (
        <form
          onSubmit={handleMeetingSubmit}
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            maxWidth: "340px",
            width: "100%",
            background: "#fafafa",
          }}
        >
          <div className="mb-2">
            <label className="form-label">Date</label>
            <input
              className="form-control"
              type="text"
              value={selectedDate.toLocaleDateString()}
              readOnly
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Where</label>
            <input
              className="form-control"
              type="text"
              value={where}
              onChange={(e) => setWhere(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={100}
              rows={3}
              required
            />
            <div style={{ fontSize: "0.8em", color: "#888" }}>
              {description.length}/100 words
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Set Meeting
          </button>
        </form>
      )}
    </div>
  );
}

export default Calendar;