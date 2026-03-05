import { NavLink } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

function Header({ cartCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-surface border-b border-line">
      <div className="w-[min(1240px,calc(100%-2rem))] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-3">
          <img className="w-[50px] h-[50px] rounded-md object-cover border border-line" src="/images/dressing-hollywood.webp" alt="Ashwi Furniture Logo" />
          <div>
            <h1 className="m-0 text-[1.35rem] leading-[1.15] text-brand-deep tracking-[0.01em] font-serif font-normal">Ashwi Furniture</h1>
            <p className="m-0 text-[0.82rem] text-muted font-sans font-medium tracking-[0.03em] uppercase">Factory Direct Furniture Store</p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center justify-between md:justify-end gap-3 md:gap-6 font-semibold text-[0.92rem] text-ink tracking-[0.02em]" aria-label="Primary">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-brand' : 'hover:text-brand')}>Home</NavLink>
          <NavLink to="/" className="hover:text-brand">Collections</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-brand' : 'hover:text-brand')}>About</NavLink>
          <NavLink to="/about" className="hover:text-brand">Contact</NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `inline-flex items-center gap-2 rounded-full border px-3 py-1.5 transition-colors ${
                isActive
                  ? 'text-brand border-brand bg-tag-bg'
                  : 'border-line hover:border-brand hover:text-brand bg-surface'
              }`
            }
          >
            <span className="text-base leading-none" aria-hidden="true">🛒</span>
            <span>Cart</span>
            <span className="min-w-6 h-6 rounded-full bg-brand text-white text-[0.78rem] inline-flex items-center justify-center px-1.5 font-bold">
              {cartCount}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
