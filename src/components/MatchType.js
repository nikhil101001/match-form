import React from "react";

function MatchType({ formData, setFormData }) {
  return (
    <div className="container">
      <label htmlFor="matchType">Select match type : </label>
      <select
        name="matchType"
        id="matchType"
        value={formData.matchType}
        onChange={(e) =>
          setFormData({ ...formData, matchType: e.target.value })
        }
      >
        <option value="Friendly">Friendly</option>
        <option value="Tournament">Tournament</option>
      </select>
    </div>
  );
}

export default MatchType;
