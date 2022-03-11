import React from "react";
import "./moreButton.css";

function MoreButton({ nextPage }) {
  return (
    <button className="more-btn" onClick={nextPage}>
      More Intros
    </button>
  );
}

export default MoreButton;
