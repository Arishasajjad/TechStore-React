function Search() {
  return (
    <section className="search-section">

      <h2>Find Your Perfect Gadget</h2>

      <p>
        Search from hundreds of premium tech products.
      </p>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search products..."
        />

        <button className="btn-primary">
          Search
        </button>

      </div>

    </section>
  );
}

export default Search;