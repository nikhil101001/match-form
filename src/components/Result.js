import React from "react";

function Result({ formData, setFormData }) {
  return (
    <div className="result-container">
      <table>
        <tr>
          <th>Team 1</th>
          <th>Team 2</th>
          <th>Match Type</th>
          <th>Tournament Name</th>
          <th>Start Date & Time</th>
          <th>End Date & Time</th>
          <th>Location</th>
          <th>Comments</th>
        </tr>
        <tr>
          <td>
            {formData.t1Name} ({formData.t1Designation})
          </td>
          <td>
            {formData.t2Name}({formData.t2Designation})
          </td>
          <td>{formData.matchType}</td>
          <td>{formData.tournamentName}</td>
          <td>{formData.startDate}</td>
          <td>{formData.endDate}</td>
          <td>{formData.location}</td>
          <td className="comment">{formData.comment}</td>
        </tr>
        <tr>
          <td>
            {formData.t1Name} ({formData.t1Designation})
          </td>
          <td>
            {formData.t2Name}({formData.t2Designation})
          </td>
          <td>{formData.matchType}</td>
          <td>{formData.tournamentName}</td>
          <td>{formData.startDate}</td>
          <td>{formData.endDate}</td>
          <td>{formData.location}</td>
          <td className="comment">{formData.comment}</td>
        </tr>
      </table>
    </div>
  );
}

export default Result;
