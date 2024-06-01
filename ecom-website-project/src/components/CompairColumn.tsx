import React from "react";
import "../style/itemCompare.css";

interface PropBenefit {
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
  benefit5: string;
  benefit6: string;
}

const CompareColumn: React.FC<PropBenefit> = (props) => {
  return (
    <div className="compare-column">
      <ul className="benefit-checklist">
        <li>{props.benefit1}</li>
        <li>{props.benefit2}</li>
        <li>{props.benefit3}</li>
        <li>{props.benefit4}</li>
        <li>{props.benefit5}</li>
        <li>{props.benefit6}</li>
      </ul>
    </div>
  );
};

export default CompareColumn;
