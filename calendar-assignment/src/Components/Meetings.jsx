import React, { useState } from "react";

function Meetings({ meetings, setMeetings }) {
  const [editingIdx, setEditingIdx] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const handleDelete = (idx) => {
    setMeetings(
      meetings.map((m, i) =>
        i === idx ? { ...m, status: "declined" } : m
      )
    );
  };

  const handleAccept = (idx) => {
    setMeetings(
      meetings.map((m, i) =>
        i === idx ? { ...m, status: "accepted" } : m
      )
    );
  };

  const handleEdit = (meeting, idx) => {
    setEditingIdx(idx);
    setEditForm({
      title: meeting.title,
      startTime: meeting.startTime || "",
      endTime: meeting.endTime || "",
      description: meeting.description,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = (idx) => {
    setMeetings(
      meetings.map((m, i) =>
        i === idx
          ? {
              ...m,
              title: editForm.title,
              startTime: editForm.startTime,
              endTime: editForm.endTime,
              description: editForm.description,
            }
          : m
      )
    );
    setEditingIdx(null);
  };

  const handleKeepOld = () => {
    setEditingIdx(null);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        width: "100vw",
      }}
    >
      <div style={{ maxWidth: 500, width: "100%" }}>
        <h3>All Meetings</h3>
        {meetings.length === 0 && <p>No meetings booked.</p>}
        <ul className="list-group">
          {meetings.map((meeting, idx) => (
            <li
              key={idx}
              className="list-group-item mb-2"
              style={{
                background:
                  meeting.status === "accepted"
                    ? "#e0e0e0"
                    : meeting.status === "declined"
                    ? "#ffe0e0"
                    : undefined,
                opacity: meeting.status ? 0.7 : 1,
              }}
            >
              {editingIdx === idx ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSave(idx);
                  }}
                >
                  <div className="mb-2">
                    <label className="form-label">Title</label>
                    <input
                      className="form-control"
                      name="title"
                      value={editForm.title}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Meeting Start Time</label>
                    <input
                      className="form-control"
                      name="startTime"
                      type="time"
                      value={editForm.startTime}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Meeting End Time</label>
                    <input
                      className="form-control"
                      name="endTime"
                      type="time"
                      value={editForm.endTime}
                      onChange={handleEditChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={editForm.description}
                      onChange={handleEditChange}
                      maxLength={100}
                      rows={3}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-sm me-2">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleKeepOld}
                  >
                    Keep old
                  </button>
                </form>
              ) : (
                <>
                  <strong>{meeting.title}</strong> <br />
                  <span>{meeting.date}</span> <br />
                  <span>
                    {meeting.startTime} - {meeting.endTime}
                  </span>
                  <br />
                  <span>{meeting.description}</span>
                  <div className="mt-2">
                    {meeting.status === "accepted" && (
                      <span className="text-success me-2">Accepted</span>
                    )}
                    {meeting.status === "declined" && (
                      <span className="text-danger me-2">Declined</span>
                    )}
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleAccept(idx)}
                      disabled={meeting.status}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(meeting, idx)}
                      disabled={meeting.status}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(idx)}
                      disabled={meeting.status}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Meetings;