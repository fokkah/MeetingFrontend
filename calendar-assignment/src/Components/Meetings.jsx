import React from "react";

function Meetings({ meetings }) {
  return (
    <div style={{ maxWidth: 500, margin: "80px auto" }}>
      <h3>All Meetings</h3>
      {meetings.length === 0 && <p>No meetings booked.</p>}
      <ul className="list-group">
        {meetings.map((meeting, idx) => (
          <li key={idx} className="list-group-item mb-2">
            <strong>{meeting.title}</strong> <br />
            <span>{meeting.date}</span> <br />
            <span>{meeting.where}</span> <br />
            <span>{meeting.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Meetings;