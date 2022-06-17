import React from "react";

function Tournament({ formData, setFormData }) {
  return (
    <div className="container">
      <div className="top-container">
        <div className="f-d-column">
          <legend htmlFor="t-start-date">Start Date & Time : </legend>
          <input
            type="datetime-local"
            name="t-start-date"
            id="t-start-date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
          />
        </div>
        <div className="f-d-column">
          <legend htmlFor="t-end-date">End Date & Time : </legend>
          <input
            type="datetime-local"
            name="t-end-date"
            id="t-end-date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
          />
        </div>
      </div>

      <div className="bottom-container">
        <div className="flex">
          <input
            type="text"
            name="t-location"
            id="t-end-date"
            placeholder="Match Location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
          <input
            type="text"
            name="tournament-name"
            id="tournament-name"
            placeholder="Tournament Name"
            value={formData.tournamentName}
            onChange={(e) =>
              setFormData({ ...formData, tournamentName: e.target.value })
            }
          />
        </div>

        <textarea
          name="t-comment"
          id="t-comment"
          cols="30"
          rows="10"
          placeholder="Comment"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
        ></textarea>
      </div>
    </div>
  );
}

export default Tournament;
