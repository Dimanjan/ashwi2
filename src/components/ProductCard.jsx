import { Link } from 'react-router-dom';

function ProductCard({ product, phone }) {
  const isPriceOnRequest = Boolean(product.priceOnRequest);
  const hasDiscount = Number(product.originalPrice) > Number(product.price);
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const message = encodeURIComponent(
    isPriceOnRequest
      ? `Hi Ashwi Furniture, I am interested in ${product.name} (${product.category} > ${product.subcategory}). Please share details.`
      : `Hi Ashwi Furniture, I am interested in ${product.name} (${product.category} > ${product.subcategory}) priced at रु ${product.price.toLocaleString('en-IN')}.`
  );

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>
        <span className="chip">{product.subcategory}</span>
      </div>

      <div className="product-body">
        <h3>
          <Link className="title-link" to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="product-desc">{product.description}</p>

        <div className="price-row">
          {isPriceOnRequest ? (
            <span className="price">Price on request</span>
          ) : (
            <>
              {hasDiscount && (
                <span className="strike">रु {product.originalPrice.toLocaleString('en-IN')}</span>
              )}
              <span className="price">रु {product.price.toLocaleString('en-IN')}</span>
              {hasDiscount && <span className="discount">-{discountPercent}% OFF</span>}
            </>
          )}
        </div>

        <p className="rating">★ {product.rating} ({product.reviews} reviews)</p>

        <div className="tags">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {(product.size || product.deliveryCharge) && (
          <p className="meta-line">
            {product.size ? `Size: ${product.size}` : ''}
            {product.size && product.deliveryCharge ? ' | ' : ''}
            {product.deliveryCharge
              ? `Delivery: रु ${product.deliveryCharge.toLocaleString('en-IN')}`
              : ''}
          </p>
        )}

        <div className="card-actions">
          <Link className="details-link" to={`/product/${product.id}`}>
            View Details
          </Link>
          <a
            className="whatsapp-link"
            href={`https://wa.me/977${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
