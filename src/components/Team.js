import React from "react";

function Team({ formData, setFormData }) {
  return (
    <div className="container">
      <div className="top-container">
        <input
          type="text"
          name="team1name"
          id="team1name-date"
          placeholder="Team 1 Name"
          value={formData.t1Name}
          onChange={(e) => setFormData({ ...formData, t1Name: e.target.value })}
        />
        <select
          name="homeNaway"
          id="homeNaway"
          value={formData.t1Designation}
          onChange={(e) =>
            setFormData({ ...formData, t1Designation: e.target.value })
          }
        >
          <option value="Home">Home</option>
          <option value="Away">Away</option>
        </select>
      </div>

      <div className="middle-container">
        <div className="border-bottom"></div>
        vs
        <div className="border-bottom"></div>
      </div>

      <div className="bottom-container">
        <input
          type="text"
          name="team2name"
          id="team2name-date"
          placeholder="Team 2 Name"
          value={formData.t2Name}
          onChange={(e) => setFormData({ ...formData, t2Name: e.target.value })}
        />
        <select
          name="homeNaway"
          id="homeNaway"
          value={formData.t2Designation}
          onChange={(e) =>
            setFormData({ ...formData, t2Designation: e.target.value })
          }
        >
          <option value="Home">Home</option>
          <option value="Away">Away</option>
        </select>
      </div>
    </div>
  );
}

export default Team;
