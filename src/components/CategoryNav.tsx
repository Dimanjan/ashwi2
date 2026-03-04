import { Link } from 'react-router-dom';

function CategoryNav() {
    const links = ['Dining', 'Bedroom', 'Mattress', 'Living Room', 'Sofa', 'Beddings', 'Office', 'Home Appliances', 'Automation'];
    return (
        <nav className="border-b border-line bg-surface hidden md:block">
            <div className="w-[min(1240px,calc(100%-2rem))] mx-auto flex items-center gap-6 py-2 overflow-x-auto text-[0.85rem] text-muted">
                {links.map((link) => (
                    <Link key={link} to="/" className="whitespace-nowrap hover:text-brand transition-colors py-1">{link}</Link>
                ))}
            </div>
        </nav>
    );
}

export default CategoryNav;
