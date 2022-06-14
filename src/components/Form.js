import React, { useState } from "react";

function Form() {
  const [page, setPage] = useState(0);

  const FormTitles = ["Match Selection", "Match Details", "Teams"];

  return (
    <div className="form">
      <div className="form-container">
        <div className="headder">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body"></div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currpage) => currpage - 1);
            }}
          >
            Prev
          </button>
          <button
            disabled={page === FormTitles.length - 1}
            onClick={() => {
              setPage((currpage) => currpage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
