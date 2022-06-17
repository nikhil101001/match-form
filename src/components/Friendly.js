import React from "react";

function Friendly({ formData, setFormData }) {
  return (
    <div className="container">
      <div className="top-container">
        <input
          type="text"
          name="f-start-date"
          id="f-start-date"
          placeholder="Start Date & Time"
          value={formData.startDate}
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
        />
        <input
          type="text"
          name="f-end-date"
          id="f-end-date"
          placeholder="End Date & Time"
          value={formData.endDate}
          onChange={(e) =>
            setFormData({ ...formData, endDate: e.target.value })
          }
        />
      </div>

      <div className="bottom-container center">
        <input
          type="text"
          name="f-location"
          id="f-end-date"
          placeholder="Match Location"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />

        <textarea
          name="f-comment"
          id="f-comment"
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

export default Friendly;
