function Trending() {
  return (
    <section className="trending">

      <h2>Trending Products</h2>

      <p>
        Explore the hottest gadgets loved by thousands of customers.
      </p>

      <div className="trend-grid">

        <div className="trend-card">
          <h1>💻</h1>
          <h3>Laptops</h3>
          <p>Powerful laptops for work and gaming.</p>
        </div>

        <div className="trend-card">
          <h1>📱</h1>
          <h3>Smartphones</h3>
          <p>Latest flagship phones at amazing prices.</p>
        </div>

        <div className="trend-card">
          <h1>🎧</h1>
          <h3>Headphones</h3>
          <p>Crystal clear sound with premium quality.</p>
        </div>

      </div>

    </section>
  );
}

export default Trending;