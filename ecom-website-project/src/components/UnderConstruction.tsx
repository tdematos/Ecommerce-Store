import React, { Fragment } from "react";
import "../style/under-construction.css";

interface UCInterface {
  title: string;
  para: string;
  onClick: () => void;
  UCModal: boolean;
}

const UnderConstruction: React.FC<UCInterface> = ({
  UCModal,
  title,
  para,
  onClick,
}) => {
  return (
    <Fragment>
      <dialog className="uc-modal" open={UCModal}>
        <h3 className="uc-title">{title}</h3>
        <p className="uc-text">{para}</p>
        <button className="uc-button" onClick={onClick}>
          PROCEED
        </button>
      </dialog>
    </Fragment>
  );
};

export default UnderConstruction;
