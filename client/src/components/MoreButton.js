import React from "react";

function MoreButton({ nextPage }) {
  return (
    <button className="more-btn" onClick={nextPage}>
      More intros!
    </button>
  );
}

export default MoreButton;
