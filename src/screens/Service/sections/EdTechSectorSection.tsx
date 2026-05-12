const sectionContent = {
  title: "Publishing Houses",
  description:
    "We combine academic rigor, structured content development, and AI-enabled processes to enhance the quality, visibility, and impact of published work. Our approach ensures that publishing evolves from content distribution to knowledge creation, validation, and global dissemination.",
  servicesLabel: "Our Services Include:",
  image: {
    src: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40231.png",
    alt: "Publishing professionals collaborating over documents",
  },
};

export const EdTechSectorSection = (): JSX.Element => {
  return (
    <section
      id="section-publishing"
      aria-labelledby="publishing-houses-title"
      className="w-full bg-gray-50"
    >
      <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 order-2 lg:order-1">
            <h2
              id="publishing-houses-title"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] text-[32px] md:text-[44px] font-normal leading-[54px] tracking-[0.88px] text-gray-900"
            >
              {sectionContent.title}
            </h2>
            <p className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">
              {sectionContent.description}
            </p>
            <p className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-semibold leading-7 text-gray-900">
              {sectionContent.servicesLabel}
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex-shrink-0 order-1 lg:order-2">
            <img
              className="w-full h-auto rounded-2xl object-cover"
              style={{ maxHeight: "490px" }}
              alt={sectionContent.image.alt}
              src={sectionContent.image.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
