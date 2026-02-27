function FilterSidebar({
  categories,
  subcategories,
  selectedCategory,
  selectedSubcategory,
  minPrice,
  maxPrice,
  bounds,
  sortBy,
  onSortChange,
  onCategoryChange,
  onSubcategoryChange,
  onMinPriceChange,
  onMaxPriceChange,
  onReset
}) {
  return (
    <aside className="filter-panel" aria-label="Filters">
      <div className="filter-title-row">
        <h2>Filters</h2>
        <button className="reset-btn" type="button" onClick={onReset}>
          Reset All
        </button>
      </div>

      <section className="filter-group">
        <h3>Sort By</h3>
        <select value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
          <option value="nameAsc">Name A-Z</option>
          <option value="nameDesc">Name Z-A</option>
          <option value="priceAsc">Price Low to High</option>
          <option value="priceDesc">Price High to Low</option>
          <option value="ratingDesc">Top Rated</option>
        </select>
      </section>

      <section className="filter-group">
        <h3>Categories</h3>
        <div className="radio-list">
          <label>
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={(event) => onCategoryChange(event.target.value)}
            />
            <span>All Categories</span>
          </label>
          {categories.map((category) => (
            <label key={category}>
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(event) => onCategoryChange(event.target.value)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="filter-group">
        <h3>Subcategories</h3>
        <div className="radio-list compact">
          <label>
            <input
              type="radio"
              name="subcategory"
              value="all"
              checked={selectedSubcategory === 'all'}
              onChange={(event) => onSubcategoryChange(event.target.value)}
            />
            <span>All Subcategories</span>
          </label>
          {subcategories.map((subcategory) => (
            <label key={subcategory}>
              <input
                type="radio"
                name="subcategory"
                value={subcategory}
                checked={selectedSubcategory === subcategory}
                onChange={(event) => onSubcategoryChange(event.target.value)}
              />
              <span>{subcategory}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="filter-group">
        <h3>
          <span aria-hidden="true">रु</span> Price Range
        </h3>
        <div className="range-wrap">
          <label htmlFor="minPrice">Min Price</label>
          <input
            id="minPrice"
            type="range"
            min={bounds.min}
            max={bounds.max}
            step="500"
            value={minPrice}
            onChange={(event) => onMinPriceChange(Number(event.target.value))}
          />
          <p>रु {minPrice.toLocaleString('en-IN')}</p>
        </div>
        <div className="range-wrap">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            id="maxPrice"
            type="range"
            min={bounds.min}
            max={bounds.max}
            step="500"
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(Number(event.target.value))}
          />
          <p>रु {maxPrice.toLocaleString('en-IN')}</p>
        </div>
      </section>
    </aside>
  );
}

export default FilterSidebar;
