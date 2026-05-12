const aboutOverviewContent = {
  heading: "Welcome ICS GLOBAL",
  description:
    "Idealizeer Content Solutions Private Limited (ICS Global) is an AI-enabled ecosystem driving quality education, community development, and sustainable institutional growth for a rapidly evolving world. At ICS Global, we believe that the future of institutions lies at the intersection of human insight and artificial intelligence. Founded a decade ago, we operate at the intersection of education, industry, and technology co-creating learning experiences that prepare learners for tomorrow&#39;s opportunities while advancing each partner university&#39;s strategic vision.",
};

export const AboutOverviewSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <h2
        className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white tracking-[0.88px] leading-[54px] w-full"
        style={{ fontSize: "clamp(28px, 2.3vw, 44px)" }}
      >
        {aboutOverviewContent.heading}
      </h2>
      <p
        className="[font-family:'Poppins',Helvetica] font-normal text-white tracking-[0] leading-7 w-full"
        style={{ fontSize: "clamp(15px, 0.94vw, 18px)" }}
      >
        {aboutOverviewContent.description}
      </p>
    </div>
  );
};
