function DesignInspiration() {
    const images = [
        { src: '/images/modern-bedroom.webp', alt: 'Modern Bedroom Design', label: 'Bedroom' },
        { src: '/images/minimalist-dining.webp', alt: 'Minimalist Dining Space', label: 'Dining' },
        { src: '/images/cozy-living.webp', alt: 'Cozy Living Area', label: 'Living Room' },
    ];

    return (
        <section className="w-[min(1240px,calc(100%-2rem))] mx-auto py-16 mb-10">
            <h2 className="font-serif text-[1.8rem] text-brand-deep mb-8 border-b border-line pb-4 font-bold">Design Inspiration</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {images.map((img, index) => (
                    <div key={index} className="group relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-[3/4] cursor-pointer">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 text-white">
                            <span className="text-xs uppercase tracking-widest font-bold mb-1 block opacity-90">{img.label}</span>
                            <h3 className="font-serif text-xl font-normal m-0">{img.alt}</h3>
                        </div>

                        {/* Interactive Hotspot Indicator */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 border border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default DesignInspiration;
