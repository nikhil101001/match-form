import React, { useState } from "react";
import MatchType from "./MatchType";
import Result from "./Result";
import Team from "./Team";
import Tournament from "./Tournament";

function Form() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    matchType: "Friendly",
    startDate: "",
    endDate: "",
    location: "",
    tournamentName: "",
    comment: "",
    t1Name: "",
    t2Name: "",
    t1Designation: "Home",
    t2Designation: "Home",
  });

  const FormTitles = ["Match Selection", "Match Details", "Teams", "Result"];

  const PageDisplay = () => {
    if (page === 0) {
      return <MatchType formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Tournament formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Team formData={formData} setFormData={setFormData} />;
    } else {
      return <Result formData={formData} setFormData={setFormData} />;
    }
  };

  const NextBtnHandle = () => {
    if (page === FormTitles.length - 1) {
      document.getElementById("next").style.display = "none";
      alert("Last page");
    } else {
      setPage((currpage) => currpage + 1);
      document.getElementById("prev").style.display = "inline-block";
    }
  };
  const prevBtnHandle = () => {
    if (page === 0) {
      document.getElementById("prev").style.display = "none";
      alert("Click next");
    } else {
      setPage((currpage) => currpage - 1);
      document.getElementById("next").style.display = "inline-block";
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="headder">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button id="prev" onClick={prevBtnHandle}>
            Prev
          </button>
          <button id="next" onClick={NextBtnHandle}>
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
