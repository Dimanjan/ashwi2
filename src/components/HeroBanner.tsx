import { Link } from 'react-router-dom';

function HeroBanner() {
    return (
        <section className="bg-brand-deep text-[#FAF6F1] relative overflow-hidden">
            <div className="w-[min(1240px,calc(100%-2rem))] mx-auto flex flex-col md:flex-row items-center min-h-[400px]">
                <div className="flex-1 py-12 md:py-20 z-10">
                    <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">New Arrival & Fast Delivery</span>
                    <h1 className="font-serif text-[3rem] md:text-[4.5rem] leading-[1.1] mb-6">
                        New Arrival<br />
                        <span className="italic font-light opacity-90 text-[2.5rem] md:text-[4rem]">Sale</span>
                    </h1>
                    <Link to="/" className="inline-block bg-brand hover:bg-brand-dark transition-colors text-white font-bold py-3 px-8 rounded-lg shadow-none border-none">
                        SHOP NOW
                    </Link>
                </div>
                <div className="flex-1 relative w-full h-full min-h-[300px] md:min-h-[400px]">
                    <div className="absolute inset-0 bg-brand-deep/20 z-10 mix-blend-multiply"></div>
                    <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80" alt="Modern Bedroom Furniture" />

                    <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-center z-20 hidden md:block">
                        <div className="bg-[#FAF6F1]/90 backdrop-blur text-brand-deep p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                            <span className="block text-2xl font-bold mb-1">up to</span>
                            <span className="block text-6xl font-serif font-black text-brand mb-2">15<span className="text-4xl">%</span></span>
                            <span className="block font-bold text-lg">+</span>
                            <span className="block font-bold mt-2 text-success bg-[#E5F5EC] px-3 py-1 rounded">5% off extra</span>
                            <span className="block text-sm mt-1 font-medium tracking-wide">on online purchase</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
