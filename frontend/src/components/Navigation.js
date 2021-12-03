import React from "react";
import axios from "axios";

function Navigation({ setType }) {
  function prevClick() {
    axios({
      baseURL: `http://localhost:4000/prev`,
    }).then((response) => {
      setType(response.data);
    });
  }

  function nextClick() {
    axios({
      baseURL: `http://localhost:4000/next`,
    }).then((response) => {
      setType(response.data);
    });
  }
  return (
    <div className="pagination_layout">
      <div className="pagination">
        <button onClick={prevClick} className={`prev`}>
          Previous
        </button>

        <button onClick={nextClick} className={`next`}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Navigation;
