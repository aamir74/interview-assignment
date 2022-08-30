const Card = () => {
  return (
    <div className="card card-with-text" key={1}>
      <img
        className="card-img"
        src="https://plus-ecommerce-store.netlify.app/static/media/product4.579a93fc.jpg"
        alt="home"
      />

      <span
      //   onClick={() => handleWishlist(product)}
      >
        <i
          className="fa fa-heart badge-btn top-right empty"
          aria-hidden="true"
          title="Add to Wishlist"
        ></i>
      </span>
      <div className="card-details margin-fix">
        <span className="rating">
          <h3 className="card-text-title">NAME</h3>{" "}
          <div className="rating-icon">
            <p className="bold desc">RATING</p>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        </span>
        <p className="desc bold">Only PRICE/- Rs</p>
      </div>
      <div className="card-btn">
        <button
          className="btn-primary btn-bg-color left-margin bold"
          //   onClick={() => handleCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { Card };
