import { Link } from 'react-router-dom';
import { Product } from '../App';

interface ProductCardProps {
  product: Product;
  phone: string;
}

function ProductCard({ product, phone }: ProductCardProps) {
  const hasDiscount = Number(product.originalPrice) > Number(product.price);
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const message = encodeURIComponent(
    `Hi Ashwi Furniture, I am interested in ${product.name} (${product.category} > ${product.subcategory}) priced at रु ${product.price.toLocaleString('en-IN')}.`
  );

  return (
    <article className="bg-card rounded-xl overflow-hidden border border-line flex flex-col">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} loading="lazy" className="w-full aspect-[16/10] object-cover block" />
        </Link>
        <span className="absolute top-2.5 left-2.5 bg-brand-deep text-[#FAF6F1] text-[0.74rem] px-2.5 py-1 rounded font-semibold tracking-[0.02em] font-sans">{product.subcategory}</span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="m-0 mb-1.5 text-[1.1rem] text-brand-deep leading-snug font-serif">
          <Link className="hover:text-brand transition-colors" to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="m-0 text-muted text-[0.88rem] leading-[1.55] min-h-[44px]">{product.description}</p>

        <div className="flex items-center gap-1.5 mt-3">
          {hasDiscount && (
            <span className="line-through text-[#B0A49A] text-[0.88rem]">रु {product.originalPrice.toLocaleString('en-IN')}</span>
          )}
          <span className="text-brand-deep font-bold text-[1.3rem] font-sans">रु {product.price.toLocaleString('en-IN')}</span>
          {hasDiscount && <span className="ml-auto bg-[#E5F5EC] text-success rounded px-2 py-0.5 font-bold text-[0.78rem]">-{discountPercent}% OFF</span>}
        </div>

        <p className="my-2.5 font-semibold text-muted text-[0.88rem]">★ {product.rating} ({product.reviews} reviews)</p>

        <div className="flex flex-wrap gap-1.5 mt-auto mb-2.5">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 rounded bg-tag-bg text-tag-text text-[0.76rem] font-medium">{tag}</span>
          ))}
        </div>

        {(product.size || product.deliveryCharge) && (
          <p className="mt-0 mb-3 text-muted text-[0.85rem] font-semibold">
            {product.size ? `Size: ${product.size}` : ''}
            {product.size && product.deliveryCharge ? ' | ' : ''}
            {product.deliveryCharge
              ? `Delivery: रु ${product.deliveryCharge.toLocaleString('en-IN')}`
              : ''}
          </p>
        )}

        <div className="grid grid-cols-1 gap-2 mt-auto">
          <Link className="inline-flex justify-center items-center w-full rounded-lg font-semibold py-2.5 px-3.5 text-[0.88rem] bg-tag-bg text-brand-deep border border-line hover:bg-[#E8DDD0] transition-colors" to={`/product/${product.id}`}>
            View Details
          </Link>
          <a
            className="inline-flex justify-center items-center w-full rounded-lg font-semibold py-2.5 px-3.5 text-[0.88rem] bg-success text-white border border-[#268C4F] hover:bg-[#268C4F] transition-colors"
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
