function PromoBanner() {
    return (
        <section className="w-[min(1240px,calc(100%-2rem))] mx-auto py-12">
            <div className="bg-[#EDF2F6] rounded-xl flex flex-col md:flex-row items-stretch border border-line overflow-hidden">
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-[#FAF6F1]">
                    <h2 className="font-bold font-sans text-[2.5rem] md:text-[3.8rem] leading-[1.05] text-[#1E3A5F] mb-4 tracking-tighter">PICK NOW<br />PAY LATER</h2>
                </div>
                <div className="flex-[1.5] p-8 md:p-12 flex flex-col justify-center bg-[#E5E5E5]">
                    <span className="font-bold tracking-widest uppercase text-[0.8rem] mb-2 text-[#4A4A4A]">IN-STORE ONLY</span>
                    <h3 className="font-bold font-sans text-[1.8rem] md:text-[2.2rem] leading-[1.2] text-ink mb-4">0% interest upto 18 months</h3>
                    <p className="text-[0.85rem] leading-[1.6] text-ink mb-6 max-w-2xl font-medium">
                        To participate in the EMI facility, the customer must be a credit card holder with a pre-approved credit limit from the bank. Subject to Credit Approval from the bank No EMI loan processing fee. *Some exclusions apply. See sales associate for details.
                    </p>
                    <div>
                        <button className="bg-[#1E3A5F] text-white px-6 py-2.5 rounded-sm hover:bg-[#152a45] transition-colors text-[0.85rem] font-bold shadow-none border-none">Click for more information</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromoBanner;
