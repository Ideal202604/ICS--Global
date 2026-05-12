const blogCards = [
  {
    id: 1,
    image: "https://c.animaapp.com/mob4x9y6E2ljCC/img/image.png",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to pr...",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/mob4x9y6E2ljCC/img/image-1.png",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to pr...",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/mob4x9y6E2ljCC/img/image-3.png",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to pr...",
  },
  {
    id: 4,
    image: "https://c.animaapp.com/mob4x9y6E2ljCC/img/image-3.png",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to pr...",
  },
];

export const Box = (): JSX.Element => {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-labelledby="blogs-and-guides-heading"
    >
      {/* Background */}
      <div
        className="relative w-full flex flex-col gap-16 bg-[url(https://c.animaapp.com/mob4x9y6E2ljCC/img/rectangle-39437.svg)] bg-[100%_100%]"
        style={{ paddingTop: "clamp(56px, 5.8vw, 112px)", paddingBottom: "clamp(48px, 4.2vw, 80px)" }}
      >
        {/* Header */}
        <header className="flex flex-col items-center px-6 md:px-16 lg:px-24">
          <div className="flex flex-col items-center gap-4 max-w-[768px] w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <h2
                id="blogs-and-guides-heading"
                className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-center tracking-[0.88px] leading-[54px] w-full"
                style={{ fontSize: "clamp(28px, 2.3vw, 44px)" }}
              >
                Blogs and guides
              </h2>
            </div>
            <p
              className="[font-family:'Poppins',Helvetica] font-normal text-white text-center tracking-[0] leading-7 w-full"
              style={{ fontSize: "clamp(15px, 0.94vw, 18px)" }}
            >
              Your Learning Hub for Ideas, Strategies &amp; Breakthroughs.
            </p>
          </div>
        </header>

        {/* Horizontally-scrollable card strip */}
        <div
          className="pl-6 md:pl-16 lg:pl-24 overflow-x-auto scrollbar-hide"
          role="list"
          aria-label="Blog articles"
        >
          <div
            className="flex items-stretch gap-6 md:gap-8 pb-2"
            style={{ width: "max-content" }}
          >
            {blogCards.map((card) => (
              <article
                key={card.id}
                role="listitem"
                className="relative flex flex-shrink-0 items-start overflow-hidden rounded-2xl border border-solid border-white bg-white shadow-md"
                style={{ width: "clamp(300px, 30.8vw, 592px)" }}
              >
                <img
                  className="self-stretch object-cover flex-shrink-0"
                  style={{ width: "clamp(110px, 13.5vw, 260px)" }}
                  alt={card.title}
                  src={card.image}
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col items-start justify-between gap-5 p-5 md:p-8 h-full">
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
                    aria-label={`Learn more about ${card.title}`}
                    className="all-[unset] box-border inline-flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
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
                      aria-hidden="true"
                      src="https://c.animaapp.com/mob4x9y6E2ljCC/img/chevron-right.svg"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
