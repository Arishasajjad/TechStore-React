function Collection() {
  return (
    <section className="categories" id="categories">

      <h2>Shop by Category</h2>

      <p>Choose your favorite category.</p>

      <div className="category-grid">

        <div className="category-card">
          <div className="category-icon">💻</div>
          <h3>Laptops</h3>
          <p>Powerful machines for work & gaming.</p>
        </div>

        <div className="category-card">
          <div className="category-icon">📱</div>
          <h3>Phones</h3>
          <p>Latest Android & iPhone collection.</p>
        </div>

        <div className="category-card">
          <div className="category-icon">🎧</div>
          <h3>Audio</h3>
          <p>Headphones, earbuds & speakers.</p>
        </div>

        <div className="category-card">
          <div className="category-icon">⌚</div>
          <h3>Wearables</h3>
          <p>Smart watches & fitness trackers.</p>
        </div>

      </div>

    </section>
  );
}

export default Collection;