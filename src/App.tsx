import { Navigate, Route, Routes } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import furnitureData from './data/furniture.json';

// Define the shape of our product data
export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  size?: string;
  deliveryCharge?: number;
  tags: string[];
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

function App() {
  const products = furnitureData.products as Product[];
  const phone = furnitureData.store.phone;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-bg text-ink font-sans flex flex-col">
      <Header cartCount={cartCount} />
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={products}
                phone={phone}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/product/:productId"
            element={
              <ProductDetailsPage
                products={products}
                phone={phone}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveFromCart={handleRemoveFromCart}
                onClearCart={handleClearCart}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
