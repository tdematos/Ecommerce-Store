import { Fragment } from "react";
import "../style/nav-selector.css";

const NavSelector: React.FC = () => {
  return (
    <Fragment>
      <dialog className="nav-modal" open>
        <div className="modal-links">
          <h3 className="modal-title">INVENTORY</h3>
          <ul className="modal-link-list">
            <li>
              <a href="">Clubs</a>
            </li>
            <li>
              <a href="">Appearel</a>
            </li>
          </ul>
        </div>
        <div className="modal-photo">
          <div className="photo-box"></div>
          <p className="photo-caption">Not sure where to start?</p>
        </div>
      </dialog>
    </Fragment>
  );
};

export default NavSelector;
