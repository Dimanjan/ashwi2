import { useMemo, useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

function HomePage({ products, phone }) {
  const prices = products.map((item) => item.price);
  const absoluteMin = Math.min(...prices);
  const absoluteMax = Math.max(...prices);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState('nameAsc');
  const [minPrice, setMinPrice] = useState(absoluteMin);
  const [maxPrice, setMaxPrice] = useState(absoluteMax);

  const categories = useMemo(
    () => Array.from(new Set(products.map((item) => item.category))).sort(),
    [products]
  );

  const subcategories = useMemo(() => {
    const source =
      selectedCategory === 'all'
        ? products
        : products.filter((item) => item.category === selectedCategory);

    return Array.from(new Set(source.map((item) => item.subcategory))).sort();
  }, [selectedCategory, products]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products
      .filter((item) => (selectedCategory === 'all' ? true : item.category === selectedCategory))
      .filter((item) =>
        selectedSubcategory === 'all' ? true : item.subcategory === selectedSubcategory
      )
      .filter((item) => item.price >= minPrice && item.price <= maxPrice)
      .filter((item) => {
        if (!normalizedSearch) return true;
        const haystack = [item.name, item.category, item.subcategory, ...item.tags].join(' ').toLowerCase();
        return haystack.includes(normalizedSearch);
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'nameDesc':
            return b.name.localeCompare(a.name);
          case 'priceAsc':
            return a.price - b.price;
          case 'priceDesc':
            return b.price - a.price;
          case 'ratingDesc':
            return b.rating - a.rating;
          case 'nameAsc':
          default:
            return a.name.localeCompare(b.name);
        }
      });
  }, [searchTerm, selectedCategory, selectedSubcategory, minPrice, maxPrice, sortBy, products]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSortBy('nameAsc');
    setMinPrice(absoluteMin);
    setMaxPrice(absoluteMax);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('all');
  };

  const handleMinPriceChange = (value) => {
    if (value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (value) => {
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">Premium Furniture Collections</p>
          <h2>Professional Furniture Factory Collection by Ashwi Furniture</h2>
          <p>
            Browse products by category and subcategory, compare pricing, and contact directly on
            WhatsApp for quick factory pricing.
          </p>
        </div>
      </section>

      <main className="container store-layout" id="collections">
        <FilterSidebar
          categories={categories}
          subcategories={subcategories}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          minPrice={minPrice}
          maxPrice={maxPrice}
          bounds={{ min: absoluteMin, max: absoluteMax }}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onCategoryChange={handleCategoryChange}
          onSubcategoryChange={setSelectedSubcategory}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
          onReset={resetFilters}
        />

        <section className="products-panel">
          <div className="products-toolbar">
            <input
              type="search"
              placeholder="Search furniture by name, category, subcategory..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <p>{filteredProducts.length} products found</p>
          </div>

          <div className="products-grid">
            {filteredProducts.length === 0 ? (
              <div className="empty-state">
                <h3>No products match your filters</h3>
                <button type="button" onClick={resetFilters}>
                  Clear filters
                </button>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} phone={phone} />
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
