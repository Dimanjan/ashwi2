function EffortlessCheckout() {
    return (
        <section className="w-[min(1240px,calc(100%-2rem))] mx-auto py-16 border-b border-line">
            <h2 className="font-serif text-[1.8rem] text-brand-deep mb-12 text-center">Effortless Checkout: Complete Your Order in Four Simple Steps</h2>

            <div className="relative max-w-4xl mx-auto">
                <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-line z-0"></div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-brand-deep text-white flex items-center justify-center text-3xl mb-5 border border-line">
                            <span role="img" aria-label="user">👤</span>
                        </div>
                        <h3 className="font-bold text-ink text-[1rem]">Sign in or<br />Create an account</h3>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-surface text-brand-deep flex items-center justify-center text-3xl mb-5 border border-line">
                            <span role="img" aria-label="cart">🛒</span>
                        </div>
                        <h3 className="font-bold text-ink text-[1rem]">Add to Cart</h3>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-surface text-brand-deep flex items-center justify-center text-3xl mb-5 border border-line">
                            <span role="img" aria-label="edit">📝</span>
                        </div>
                        <h3 className="font-bold text-ink text-[1rem]">Checkout and<br />Complete the form</h3>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-surface text-brand-deep flex items-center justify-center text-3xl mb-5 border border-line">
                            <span role="img" aria-label="truck">🚚</span>
                        </div>
                        <h3 className="font-bold text-ink text-[1rem]">Make a payment on delivery<br />or Pay via Fonepay</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EffortlessCheckout;
