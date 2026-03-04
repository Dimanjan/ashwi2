import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
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

function App() {
  const products = furnitureData.products as Product[];
  const phone = furnitureData.store.phone;

  return (
    <div className="min-h-screen bg-bg text-ink font-sans flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage products={products} phone={phone} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage products={products} phone={phone} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
