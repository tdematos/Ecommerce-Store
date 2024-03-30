import "../style/hompage.css";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <p className="announcement">
          Site-wide launch sale! Save up to 50% when you spend over $30!!!{" "}
        </p>
        <div className="close-button">
          <p>x</p>
        </div>
      </section>
    </>
  );
};

export default Banner;
