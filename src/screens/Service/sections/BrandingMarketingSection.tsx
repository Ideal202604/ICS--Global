const whyItems = [
  {
    id: 1,
    text: "AI-enabled, future-ready ecosystem",
    icon: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40223.png",
  },
  {
    id: 2,
    text: "Strong focus on quality education and research excellence",
    icon: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40223-1.png",
  },
  {
    id: 3,
    text: "Commitment to community-driven impact",
    icon: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40223-2.png",
  },
  {
    id: 4,
    text: "Strategies aligned with sustainability and scalability",
    icon: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40224.png",
  },
  {
    id: 5,
    text: "A balance of human expertise and intelligent systems",
    icon: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40223-3.png",
  },
];

export const BrandingMarketingSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="why-ics-global-title"
      className="w-full"
    >
      <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Left: photo */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img
              className="w-full h-auto rounded-2xl object-cover"
              style={{ maxHeight: "577px" }}
              alt="Students collaborating outdoors"
              src="https://c.animaapp.com/mo863n0tfCwuCJ/img/rectangle-9512.png"
            />
          </div>
          {/* Right: Why ICS Global */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
            <h2
              id="why-ics-global-title"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-black text-[42px] md:text-[58px] lg:text-[68px] tracking-[0.88px] leading-[1.2]"
            >
              Why ICS Global
            </h2>
            <ul className="flex flex-col items-start gap-4 list-none m-0 p-0 w-full">
              {whyItems.map((item) => (
                <li key={item.id} className="flex items-center gap-6 p-2.5 w-full">
                  <img
                    className="w-8 h-8 flex-shrink-0"
                    alt=""
                    aria-hidden="true"
                    src={item.icon}
                  />
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-primary-4 text-xl md:text-[28px] tracking-[0.64px] leading-[42px]">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
