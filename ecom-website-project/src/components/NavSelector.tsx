import { Fragment } from "react";
import "../style/nav-selector.css";

interface navSelectorProps {
  navTitle: string;
  caption: string;
  isDialogOpen: boolean;
  onMouseLeave: React.MouseEventHandler<HTMLDialogElement>;
}

const NavSelector: React.FC<navSelectorProps> = ({
  navTitle,
  caption,
  isDialogOpen,
  onMouseLeave,
}) => {
  return (
    <Fragment>
      <dialog
        className="nav-modal"
        open={isDialogOpen}
        onMouseLeave={onMouseLeave}
      >
        <div className="modal-links">
          <h3 className="modal-title">{navTitle}</h3>
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
          <p className="photo-caption">{caption}</p>
        </div>
      </dialog>
    </Fragment>
  );
};

export default NavSelector;
