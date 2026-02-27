import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import furnitureData from './data/furniture.json';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage products={furnitureData.products} phone={furnitureData.store.phone} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/product/:productId"
          element={<ProductDetailsPage products={furnitureData.products} phone={furnitureData.store.phone} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
