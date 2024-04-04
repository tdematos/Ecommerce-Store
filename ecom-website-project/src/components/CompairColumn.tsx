import React from "react";
import "../style/itemCompare.css";

const CompareColumn: React.FC = () => {
  return (
    <div className="compare-column">
      <ul className="benefit-checklist">
        <li>Fast</li>
        <li>Light</li>
        <li>Stable</li>
        <li>Bright</li>
        <li>Strong</li>
        <li>flashy</li>
      </ul>
    </div>
  );
};

export default CompareColumn;
