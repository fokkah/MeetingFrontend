import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./Components/Calendar";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Meetings from "./Components/Meetings";

function App() {
  const [meetings, setMeetings] = useState([]);

  // Add this function to pass to Calendar
  const handleAddMeeting = (meeting) => {
    setMeetings([...meetings, meeting]);
  };

  return (
    <Router>
      <div style={{ marginTop: "56px" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Calendar onAddMeeting={handleAddMeeting} />} />
          <Route path="/meetings" element={<Meetings meetings={meetings} setMeetings={setMeetings} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
