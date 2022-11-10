import React from "react";

const PrimaryButton = ({ title, color, onClick, onHoverColor }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className={`text-white ${color} hover:${onHoverColor} first-line:font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
      >
        {title}
      </button>
    </div>
  );
};

export default PrimaryButton;
