const ITEMS = [
  ["100 night trial", "Sleep on it at home"],
  ["10 year warranty", "Non sag core protection"],
  ["Free delivery and setup", "Placed in your bedroom"],
  ["Zero cost EMI", "From ₹1,499 a month"],
];

export default function TrustStrip() {
  return (
    <section className="bg-mist" aria-label="Our promises">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-6">
        {ITEMS.map(([t, s]) => (
          <div key={t} className="text-center lg:text-left">
            <p className="text-base font-semibold text-charcoal">{t}</p>
            <p className="text-sm text-charcoal-500">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
