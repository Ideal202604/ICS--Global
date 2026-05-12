const highlights = [
  {
    title: "Quality Education",
    description: (
      <>
        <span className="font-normal">We enable institutions to deliver education that is </span>
        <span className="font-medium">relevant, research-driven, and aligned with global standards.</span>
      </>
    ),
  },
  {
    title: "Sustainability",
    description: (
      <>
        <span className="font-normal">We design systems that are not just efficient — but </span>
        <span className="font-medium">resilient, scalable, and sustainable in the long term.</span>
      </>
    ),
  },
  {
    title: "Intelligent Systems",
    description: (
      <>
        <span className="font-normal">We integrate </span>
        <span className="font-medium">artificial intelligence and data-driven thinking</span>
        <span className="font-normal"> to enhance decision-making, personalise learning, and optimise institutional processes.</span>
      </>
    ),
  },
  {
    title: "Community Development",
    description: (
      <>
        <span className="font-normal">We extend impact beyond institutions — into </span>
        <span className="font-medium">communities, ecosystems, and society at large.</span>
      </>
    ),
  },
];

export const ConferenceHighlightSection = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full">
      {highlights.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <img
            className="w-[56px] md:w-[68px] lg:w-[73px] h-auto flex-shrink-0 mt-1"
            alt="Award icon"
            src="https://c.animaapp.com/nj999vRB/img/-pngtree-award-education-3d-illustrations-13003714-1-3.png"
          />
          <div className="flex items-start gap-3 flex-1">
            <div className="w-0.5 self-stretch bg-white/60 rounded-sm flex-shrink-0 min-h-[90px]" />
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[clamp(20px,1.7vw,32px)] leading-[1.35]">
                {item.title}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] text-white/90 text-sm md:text-[15px] leading-6">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
