import { Link, useParams } from 'react-router-dom';

function ProductDetailsPage({ products, phone }) {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <main className="container product-details-page">
        <div className="empty-state">
          <h3>Product not found</h3>
          <Link className="back-link" to="/">
            Back to catalog
          </Link>
        </div>
      </main>
    );
  }

  const hasDiscount = Number(product.originalPrice) > Number(product.price);
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const message = encodeURIComponent(
    `Hi Ashwi Furniture, I am interested in ${product.name} (${product.category} > ${product.subcategory}) priced at रु ${product.price.toLocaleString('en-IN')}.`
  );

  return (
    <main className="container product-details-page">
      <div className="details-grid">
        <div className="details-image-wrap">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-content">
          <p className="eyebrow">{product.category} / {product.subcategory}</p>
          <h2>{product.name}</h2>
          <p className="details-description">{product.description}</p>

          <div className="price-row details-price-row">
            {hasDiscount && <span className="strike">रु {product.originalPrice.toLocaleString('en-IN')}</span>}
            <span className="price">रु {product.price.toLocaleString('en-IN')}</span>
            {hasDiscount && <span className="discount">-{discountPercent}% OFF</span>}
          </div>

          {(product.size || product.deliveryCharge) && (
            <p className="meta-line details-meta-line">
              {product.size ? `Size: ${product.size}` : ''}
              {product.size && product.deliveryCharge ? ' | ' : ''}
              {product.deliveryCharge
                ? `Delivery: रु ${product.deliveryCharge.toLocaleString('en-IN')}`
                : ''}
            </p>
          )}

          <div className="tags details-tags">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="details-actions">
            <a href={`https://wa.me/977${phone}?text=${message}`} target="_blank" rel="noopener noreferrer">
              Contact on WhatsApp
            </a>
            <Link className="back-link" to="/">
              Back to catalog
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;
