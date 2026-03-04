import { useParams, Link } from 'react-router-dom';
import { Product } from '../App';

interface ProductDetailsPageProps {
  products: Product[];
  phone: string;
}

function ProductDetailsPage({ products, phone }: ProductDetailsPageProps) {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="w-[min(1240px,calc(100%-2rem))] mx-auto py-[100px] text-center min-h-[60vh]">
        <h2 className="font-serif text-brand-deep text-[2rem] mb-4">Product Not Found</h2>
        <Link className="inline-block mt-4 px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors" to="/">Back to Catalog</Link>
      </main>
    );
  }

  const hasDiscount = Number(product.originalPrice) > Number(product.price);
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const message = encodeURIComponent(
    `Hi Ashwi Furniture, I want to order ${product.name} priced at रु ${product.price.toLocaleString('en-IN')}.`
  );

  return (
    <main className="w-[min(1240px,calc(100%-2rem))] mx-auto py-10">
      <Link className="inline-flex items-center text-brand font-semibold mb-6 hover:text-brand-dark transition-colors" to="/">
        <span className="mr-2" aria-hidden="true">&larr;</span> Back to Catalog
      </Link>

      <div className="bg-surface rounded-xl overflow-hidden border border-line flex flex-col md:flex-row p-6 md:p-8 gap-8 md:gap-10">
        <div className="flex-1 min-w-[300px]">
          <img className="w-full h-auto rounded-lg border border-line object-cover" src={product.image} alt={product.name} />
        </div>

        <div className="flex-[1.2] flex flex-col">
          <div className="mb-2">
            <span className="bg-brand-deep text-[#FAF6F1] font-sans text-[0.85rem] px-3 py-1 rounded font-semibold tracking-wide inline-block">{product.category}</span>
            <span className="text-muted ml-3 text-[0.95rem] font-semibold">{product.subcategory}</span>
          </div>

          <h1 className="m-0 mt-3 mb-4 text-brand-deep font-serif text-[2.2rem] leading-[1.2]">{product.name}</h1>
          <p className="text-muted text-[1.05rem] leading-[1.65] font-sans mb-5">{product.description}</p>

          <div className="flex items-center gap-3 mb-6 p-4 bg-bg rounded-lg border border-line">
            {hasDiscount && (
              <span className="line-through text-[#B0A49A] text-[1.1rem]">रु {product.originalPrice.toLocaleString('en-IN')}</span>
            )}
            <span className="text-brand-deep text-[1.8rem] font-bold">रु {product.price.toLocaleString('en-IN')}</span>
            {hasDiscount && <span className="ml-auto bg-[#E5F5EC] text-success rounded px-3 py-1 font-bold text-[0.9rem]">Save {discountPercent}%</span>}
          </div>

          <dl className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-y-3 mb-6 p-4 bg-bg rounded-lg border border-line">
            <dt className="text-muted font-bold text-[0.95rem]">Rating:</dt>
            <dd className="font-semibold text-ink m-0">★ {product.rating} ({product.reviews} reviews)</dd>

            {product.size && (
              <>
                <dt className="text-muted font-bold text-[0.95rem]">Size/Dimensions:</dt>
                <dd className="font-semibold text-ink m-0">{product.size}</dd>
              </>
            )}

            {product.deliveryCharge !== undefined && (
              <>
                <dt className="text-muted font-bold text-[0.95rem]">Delivery:</dt>
                <dd className="font-semibold text-ink m-0">रु {product.deliveryCharge.toLocaleString('en-IN')}</dd>
              </>
            )}

            {(product.tags && product.tags.length > 0) && (
              <>
                <dt className="text-muted font-bold text-[0.95rem]">Features:</dt>
                <dd className="font-semibold text-ink m-0">{product.tags.join(', ')}</dd>
              </>
            )}
          </dl>

          <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4 border-t border-line">
            <a
              className="flex-1 inline-flex justify-center items-center rounded-lg font-bold py-3.5 px-6 text-[1.05rem] bg-success text-white border border-[#268C4F] hover:bg-[#268C4F] transition-colors shadow-none"
              href={`https://wa.me/977${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
            </a>
            <a
              className="flex-1 inline-flex justify-center items-center rounded-lg font-bold py-3.5 px-6 text-[1.05rem] bg-surface text-brand-deep border-[2px] border-brand-deep hover:bg-[#FAF6F1] transition-colors shadow-none"
              href={`https://wa.me/977${phone}?text=I have a question about ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;
