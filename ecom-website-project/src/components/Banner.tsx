import "../style/hompage.css";

const Banner = () => {
  return (
    <>
      <dialog className="banner">
        <p className="announcement">
          Site-wide launch sale! Save up to 50% when you spend over $30!!!{" "}
        </p>
        <div className="close-button">
          <p>x</p>
        </div>
      </dialog>
    </>
  );
};

export default Banner;
