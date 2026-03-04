interface FilterSidebarProps {
  categories: string[];
  subcategories: string[];
  selectedCategory: string;
  selectedSubcategory: string;
  minPrice: number;
  maxPrice: number;
  bounds: { min: number; max: number };
  sortBy: string;
  onSortChange: (sort: string) => void;
  onCategoryChange: (cat: string) => void;
  onSubcategoryChange: (sub: string) => void;
  onMinPriceChange: (val: number) => void;
  onMaxPriceChange: (val: number) => void;
  onReset: () => void;
}

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
}: FilterSidebarProps) {
  return (
    <aside className="self-start bg-surface border border-line rounded-xl p-5 md:sticky md:top-[85px] md:max-h-[calc(100vh-105px)] md:overflow-auto" aria-label="Filters">
      <div className="flex justify-between items-center gap-2">
        <h2 className="m-0 text-[1.45rem] color-brand-deep font-serif text-brand-deep">Filters</h2>
        <button className="border border-line bg-surface text-brand font-semibold text-[0.85rem] rounded-lg px-3.5 py-2 cursor-pointer font-sans hover:bg-tag-bg hover:text-brand-dark transition-colors" type="button" onClick={onReset}>
          Reset All
        </button>
      </div>

      <section className="mt-6">
        <h3 className="m-0 mb-2.5 text-[1.05rem] text-ink font-serif">Sort By</h3>
        <select
          className="w-full rounded-lg border border-line py-2.5 px-3.5 font-inherit text-[0.9rem] bg-white text-ink focus:outline focus:outline-2 focus:outline-brand focus:-outline-offset-1 focus:border-brand"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="nameAsc">Name A-Z</option>
          <option value="nameDesc">Name Z-A</option>
          <option value="priceAsc">Price Low to High</option>
          <option value="priceDesc">Price High to Low</option>
          <option value="ratingDesc">Top Rated</option>
        </select>
      </section>

      <section className="mt-6">
        <h3 className="m-0 mb-2.5 text-[1.05rem] text-ink font-serif">Categories</h3>
        <div className="grid gap-2.5">
          <label className="flex items-center gap-2.5 text-ink text-[0.9rem] cursor-pointer">
            <input
              className="accent-brand w-[18px] h-[18px] m-0"
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={(event) => onCategoryChange(event.target.value)}
            />
            <span>All Categories</span>
          </label>
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2.5 text-ink text-[0.9rem] cursor-pointer">
              <input
                className="accent-brand w-[18px] h-[18px] m-0"
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

      <section className="mt-6">
        <h3 className="m-0 mb-2.5 text-[1.05rem] text-ink font-serif">Subcategories</h3>
        <div className="grid gap-2.5 max-h-[185px] overflow-auto pr-1">
          <label className="flex items-center gap-2.5 text-ink text-[0.9rem] cursor-pointer">
            <input
              className="accent-brand w-[18px] h-[18px] m-0"
              type="radio"
              name="subcategory"
              value="all"
              checked={selectedSubcategory === 'all'}
              onChange={(event) => onSubcategoryChange(event.target.value)}
            />
            <span>All Subcategories</span>
          </label>
          {subcategories.map((subcategory) => (
            <label key={subcategory} className="flex items-center gap-2.5 text-ink text-[0.9rem] cursor-pointer">
              <input
                className="accent-brand w-[18px] h-[18px] m-0"
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

      <section className="mt-6">
        <h3 className="m-0 mb-2.5 text-[1.05rem] text-ink font-serif">
          <span aria-hidden="true">रु</span> Price Range
        </h3>
        <div className="mb-3.5">
          <label htmlFor="minPrice" className="block text-muted mb-1 text-[0.85rem]">Min Price</label>
          <input
            id="minPrice"
            className="w-full accent-brand"
            type="range"
            min={bounds.min}
            max={bounds.max}
            step="500"
            value={minPrice}
            onChange={(event) => onMinPriceChange(Number(event.target.value))}
          />
          <p className="m-0 mt-1 font-bold text-brand-deep text-[0.9rem]">रु {minPrice.toLocaleString('en-IN')}</p>
        </div>
        <div className="mb-3.5">
          <label htmlFor="maxPrice" className="block text-muted mb-1 text-[0.85rem]">Max Price</label>
          <input
            id="maxPrice"
            className="w-full accent-brand"
            type="range"
            min={bounds.min}
            max={bounds.max}
            step="500"
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(Number(event.target.value))}
          />
          <p className="m-0 mt-1 font-bold text-brand-deep text-[0.9rem]">रु {maxPrice.toLocaleString('en-IN')}</p>
        </div>
      </section>
    </aside>
  );
}

export default FilterSidebar;
