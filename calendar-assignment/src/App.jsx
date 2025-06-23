import { useState } from "react";
import Calendar from "./Components/Calendar";
import Navbar from "./Components/Navbar";

function App() {
  const [view, setView] = useState("calendar");
  const [calendarResetKey, setCalendarResetKey] = useState(0);
  const [meetings, setMeetings] = useState([]);

  const handleHome = () => {
    setView("calendar");
    setCalendarResetKey((prev) => prev + 1);
  };

  const handleDelete = (id) => {
    setMeetings(meetings.filter((m) => m.id !== id));
  };

  return (
    <div>
      <div style={{ marginTop: "56px" }}>
        <Navbar setView={setView} onHome={handleHome} />
        {view === "calendar" && (
          <Calendar
            meetings={meetings}
            setMeetings={setMeetings}
            resetKey={calendarResetKey}
          />
        )}
        {view === "meetings" && (
          <div className="container mt-4">
            <h3>All Meetings</h3>
            {meetings.length === 0 && <p>No meetings booked.</p>}
            <ul className="list-group">
              {meetings.map((meeting) => (
                <li
                  key={meeting.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{meeting.title}</strong> <br />
                    {meeting.date} | {meeting.email} <br />
                    {meeting.description}
                  </div>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(meeting.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
