import { NavLink } from 'react-router-dom';

function Header() {
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
