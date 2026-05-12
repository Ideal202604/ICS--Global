const highlights = [
  {
    title: "Our Mission",
    description:
      "To empower universities worldwide with future-ready curricula, digital delivery ecosystems, and industry-embedded learning that elevate student outcomes and institutional reputation.",
  },
  {
    title: "Our Vision",
    description:
      "To become the most trusted partner for universities, governments and enterprises seeking multidisciplinary insight, scalable programmes and measurable social impact.",
  },
];

export const MissionVisionHighlightsSection = (): JSX.Element => {
  return (
    <section
      aria-label="Mission and vision highlights"
      className="w-full bg-white"
      style={{ paddingTop: "clamp(56px, 4.8vw, 92px)", paddingBottom: "clamp(56px, 4.8vw, 92px)" }}
    >
      <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Figma: two cols separated by ~257 px gap at 1920 px */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-[clamp(60px,13.4vw,257px)]">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-start gap-4 lg:flex-1"
            >
              <div className="flex flex-col items-start gap-2 w-full">
                <h2
                  className="text-primary-4 [font-family:'Belgiano_Serif-Regular',Helvetica] font-normal tracking-[0.88px] leading-[54px] w-full"
                  style={{ fontSize: "clamp(28px, 2.3vw, 44px)" }}
                >
                  {item.title}
                </h2>
              </div>
              <p
                className="[font-family:'Poppins',Helvetica] font-normal text-primary-4 tracking-[0] leading-7"
                style={{ fontSize: "clamp(15px, 0.94vw, 18px)" }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
