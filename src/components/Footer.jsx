import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h3>Ashwi Furniture</h3>
          <p>Quality furniture directly from factory to your home.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Collections</Link>
          <Link to="/about">About Us</Link>
          <Link to="/about">Contact</Link>
        </div>
        <div>
          <h4>WhatsApp</h4>
          <a href="https://wa.me/9779860479751" target="_blank" rel="noopener noreferrer">
            Chat on +977 98604 79751
          </a>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Ashwi Furniture. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
