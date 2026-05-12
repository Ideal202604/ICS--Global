const sectionContent = {
  title: "Corporate",
  description:
    "We enable corporates to strengthen workforce capabilities, integrate intelligent systems, and drive community-focused impact through structured learning, strategic consulting, and AI-enabled solutions. Our approach aligns business objectives with continuous learning, innovation, and long-term sustainability.",
  servicesHeading: "Our Services Include:",
  image: {
    src: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40233.png",
    alt: "Corporate team collaborating around a laptop during a meeting",
  },
};

export const PublishingHousesSection = (): JSX.Element => {
  return (
    <section
      id="section-corporate"
      aria-labelledby="corporate-title"
      className="w-full"
    >
      <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img
              className="w-full h-auto rounded-2xl object-cover"
              style={{ maxHeight: "490px" }}
              alt={sectionContent.image.alt}
              src={sectionContent.image.src}
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
            <h2
              id="corporate-title"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] text-[32px] md:text-[44px] font-normal leading-[54px] tracking-[0.88px] text-gray-900"
            >
              {sectionContent.title}
            </h2>
            <p className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">
              {sectionContent.description}
            </p>
            <p className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-semibold leading-7 text-gray-900">
              {sectionContent.servicesHeading}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
