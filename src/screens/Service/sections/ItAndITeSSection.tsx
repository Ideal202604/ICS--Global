const leftColumnServices = [
  "1. Strategy & Planning",
  "2. Digital Advertising",
  "3. Video & Film Advertising",
  "4. Influencer & Celebrity Marketing",
];

const rightColumnServices = [
  "5. PR & Brand Visibility",
  "6. Conventional & Outdoor Advertising",
  "7. Creative Design & Campaign Development",
  "8. Performance Optimization",
];

export const ItAndITeSSection = (): JSX.Element => {
  return (
    <section
      id="section-branding"
      aria-labelledby="branding-marketing-title"
      className="w-full bg-gray-50"
    >
      <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 order-2 lg:order-1">
            <h2
              id="branding-marketing-title"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] text-[32px] md:text-[44px] font-normal leading-[54px] tracking-[0.88px] text-gray-900"
            >
              Branding And Marketing
            </h2>
            <p className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">
              We craft powerful brand identities and data-driven marketing strategies that amplify your reach, build lasting audience trust, and drive measurable business growth across all channels.
            </p>
            <p className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-semibold leading-7 text-gray-900">
              Our Services Include:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <ul className="flex-1 flex flex-col gap-0 list-none p-0 m-0">
                {leftColumnServices.map((s) => (
                  <li key={s} className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">{s}</li>
                ))}
              </ul>
              <ul className="flex-1 flex flex-col gap-0 list-none p-0 m-0">
                {rightColumnServices.map((s) => (
                  <li key={s} className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">{s}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-shrink-0 order-1 lg:order-2">
            <img
              className="w-full h-auto rounded-2xl object-cover"
              style={{ maxHeight: "490px" }}
              alt="Branding and marketing team collaborating around a laptop"
              src="https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40234.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
