import { Fragment, useEffect, useState } from "react";
import "../style/nav-selector.css";
import { Link } from "react-router-dom";

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
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Set the array of products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
              <Link to="shop/collection">Appearel</Link>
            </li>
          </ul>
        </div>
        <div className="modal-photo">
          <div className="photo-box">
            <img
              className="hov-img"
              src={products[1] && products[1].image}
              alt=""
            />
          </div>
          <p className="photo-caption">
            <Link to="shop/collection">{caption}</Link>
          </p>
        </div>
      </dialog>
    </Fragment>
  );
};

export default NavSelector;
