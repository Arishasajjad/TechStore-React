function Reviews() {
  return (
    <section className="reviews" id="reviews">

      <h2>What Our Customers Say</h2>

      <p>
        Trusted by thousands of happy customers across Pakistan.
      </p>

      <div className="review-grid">

        <div className="review-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p>
            "Amazing quality and super fast delivery. Highly recommended!"
          </p>
          <h4>Ali Khan</h4>
          <span>Lahore</span>
        </div>

        <div className="review-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p>
            "Excellent customer service and genuine products."
          </p>
          <h4>Sarah Ahmed</h4>
          <span>Karachi</span>
        </div>

        <div className="review-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p>
            "The best online tech store I've ever used."
          </p>
          <h4>Usman Raza</h4>
          <span>Islamabad</span>
        </div>

      </div>

    </section>
  );
}

export default Reviews;