const Newslist = (props) => {
  const { screenMode, title, imgUrl, description, newsUrl } = props;

  return (
    <>
      <div
        // News Card
        className={`card my-3 mx-2 bg-${screenMode}`}
        style={{ width: "18rem" }}
      >
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className={`card-body bg-${screenMode}`}>
          <h5
            className={`card-title text-${
              screenMode === "light" ? "dark" : "light"
            }`}
          >
            {title}...
          </h5>
          <p
            className={`card-text text-${
              screenMode === "light" ? "dark" : "light"
            }`}
          >
            {description}...
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-success"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Newslist;
