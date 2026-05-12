import { JSX } from "react";

const homeBlogCards = [
  {
    image: "https://c.animaapp.com/mo857b66QKlwSd/img/image.png",
    imageAlt: "Classroom interior with desks and chairs",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
  {
    image: "https://c.animaapp.com/mo857b66QKlwSd/img/image-1.png",
    imageAlt: "People collaborating around a wooden table",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
  {
    image: "https://c.animaapp.com/mo857b66QKlwSd/img/image-3.png",
    imageAlt: "School campus building with a running track",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
];

const BlogCard = ({ card }: { card: typeof homeBlogCards[number] }) => (
  <article
    className="relative flex items-start overflow-hidden rounded-2xl border border-solid border-white bg-white shadow-md flex-shrink-0"
    style={{ width: "clamp(340px, 28vw, 440px)" }}
  >
    <img
      className="self-stretch object-cover flex-shrink-0"
      style={{ width: "clamp(110px, 13.5vw, 200px)" }}
      alt={card.imageAlt}
      src={card.image}
      loading="lazy"
      draggable={false}
    />
    <div className="flex flex-1 flex-col items-start justify-between gap-5 p-5 md:p-6 h-full">
      <div className="flex flex-col items-start gap-2 w-full">
        <h3
          className="[font-family:'Inter',Helvetica] font-semibold leading-7 tracking-[0] text-gray-900 w-full"
          style={{ fontSize: "clamp(14px, 0.94vw, 18px)" }}
        >
          {card.title}
        </h3>
        <p
          className="[font-family:'Inter',Helvetica] font-normal leading-6 tracking-[0] text-gray-600 w-full"
          style={{ fontSize: "clamp(12px, 0.83vw, 16px)" }}
        >
          {card.description}
        </p>
      </div>
      <button
        type="button"
        className="all-[unset] box-border inline-flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        aria-label={`Learn more about ${card.title}`}
      >
        <span
          className="[font-family:'Inter',Helvetica] font-medium leading-6 tracking-[0] text-[#0072de]"
          style={{ fontSize: "clamp(12px, 0.83vw, 16px)" }}
        >
          Learn more
        </span>
        <img
          className="w-5 h-5"
          alt=""
          src="https://c.animaapp.com/mo857b66QKlwSd/img/chevron-right.svg"
          aria-hidden="true"
          draggable={false}
        />
      </button>
    </div>
  </article>
);

export const HomeBlogsSlider = (): JSX.Element => {
  /* We duplicate the card set so the marquee loops seamlessly */
  const duplicated = [...homeBlogCards, ...homeBlogCards, ...homeBlogCards, ...homeBlogCards];

  return (
    <section
      aria-labelledby="home-blogs-heading"
      className="w-full relative overflow-hidden"
      style={{
        paddingTop: "clamp(56px, 5.8vw, 112px)",
        paddingBottom: "clamp(56px, 5.8vw, 112px)",
        backgroundColor: "#1566a0",
      }}
    >

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
          <div className="flex flex-col items-center gap-4 max-w-[768px] mx-auto text-center">
            <h2
              id="home-blogs-heading"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white tracking-[0.88px] leading-[54px] w-full"
              style={{ fontSize: "clamp(28px, 2.3vw, 44px)" }}
            >
              Blogs and guides
            </h2>
            <p
              className="[font-family:'Poppins',Helvetica] font-normal text-white leading-7 tracking-[0] w-full"
              style={{ fontSize: "clamp(15px, 0.94vw, 18px)" }}
            >
              Your Learning Hub for Ideas, Strategies &amp; Breakthroughs.
            </p>
          </div>
        </div>

        {/* Marquee scrolling cards */}
        <div className="w-full overflow-hidden">
          {/* CSS animation keyframes */}
          <style>{`
            @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              gap: clamp(16px, 1.6vw, 32px);
              width: max-content;
              animation: marquee-scroll 30s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee-track">
            {duplicated.map((card, i) => (
              <BlogCard key={`marquee-${i}`} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
