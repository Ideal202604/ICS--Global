const heroBannerContent = {
  title: "Our Signature Offerings",
  description:
    "An integrated suite of AI-enabled, research-driven solutions designed to advance quality education, sustainable growth, and community impact.",
};

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section aria-labelledby="hero-banner-section-title" className="w-full flex flex-col items-center py-16 md:py-20">
      <div className="flex flex-col items-center gap-4 w-full max-w-screen-md px-4">
        <h2
          id="hero-banner-section-title"
          className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-gray-900 text-[32px] md:text-[44px] text-center tracking-[0.88px] leading-[54px]"
        >
          {heroBannerContent.title}
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-primary-3 text-base md:text-lg text-center leading-7">
          {heroBannerContent.description}
        </p>
      </div>
    </section>
  );
};
