import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-10 bg-brand-deep text-[#E8DFD4] py-10 pb-5" id="contact">
      <div className="w-[min(1240px,calc(100%-2rem))] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <h3 className="mt-0 text-[#FAF6F1] font-serif text-xl mb-2">Ashwi Furniture</h3>
          <p className="text-[0.9rem] leading-[1.6] text-[#D4C8BC]">Quality furniture directly from factory to your home.</p>
        </div>
        <div>
          <h4 className="mt-0 text-[#FAF6F1] font-serif text-lg mb-2">Quick Links</h4>
          <Link to="/" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">Collections</Link>
          <Link to="/about" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">About Us</Link>
          <Link to="/about" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">Contact</Link>
        </div>
        <div>
          <h4 className="mt-0 text-[#FAF6F1] font-serif text-lg mb-2">WhatsApp</h4>
          <a href="https://wa.me/9779860479751" target="_blank" rel="noopener noreferrer" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">
            Chat on +977 98604 79751
          </a>
        </div>
      </div>
      <p className="text-center mt-6 pt-4 border-t border-[rgba(232,223,212,0.2)] text-[#9A8B7E] text-[0.85rem]">© {new Date().getFullYear()} Ashwi Furniture. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
