import Image from "next/image";

const TILES = [
  {
    title: "Stays cool.",
    body: "Open cell foam and pin core latex let heat and moisture escape, instead of trapping them against you.",
    img: "/images/bed-bg-10.jpg",
    alt: "A white quilted Restlon mattress",
  },
  {
    title: "Keeps your spine level.",
    body: "Five zones of different firmness: softer under the shoulders and calves, firmer under the lower back and hips.",
    img: "/images/bed-bg-14.jpg",
    alt: "A Restlon PostureFit mattress",
  },
  {
    title: "Stays dry and fresh.",
    body: "A bamboo viscose cover wicks moisture and resists dust mites, even through humid monsoon nights.",
    img: "/images/sleep-solution-3.jpg",
    alt: "Close up of the quilted mattress fabric",
  },
  {
    title: "Made to last.",
    body: "Tested for 100,000 roller cycles and backed by a 10 year warranty.",
    img: "/images/sleep-solution-1.jpg",
    alt: "A craftsman stitching a mattress edge",
  },
];

export default function FeatureTiles() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {TILES.map((t) => (
            <article key={t.title} className="tile flex flex-col overflow-hidden rounded-3xl bg-mist">
              <div className="p-8 sm:p-10">
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-3 max-w-[420px] text-lg text-charcoal-500">{t.body}</p>
              </div>
              <div className="relative mt-auto aspect-[4/3] overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.alt}
                  fill
                  className="tile-img object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
