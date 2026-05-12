export const HeroIntroSection = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full">
      {/* Left side spacer / decorative area for larger screens */}
      <div className="hidden md:block flex-1" />

      {/* Right content */}
      <div className="flex flex-col items-start gap-6 w-full md:max-w-[625px]">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6">
            About Us
          </div>
          <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-4xl md:text-[44px] tracking-[0.88px] leading-tight md:leading-[54px]">
            Welcome To<br />ICS GLOBAL
          </h2>
        </div>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-base md:text-lg leading-7">
          <span className="text-[#eeeeee]">
            Idealizeer Content Solutions Private Limited (ICS Global) is an AI-enabled ecosystem driving{" "}
          </span>
          <span className="font-medium text-white">
            quality education, community development, and sustainable institutional growth
          </span>
          <span className="text-[#eeeeee]">
            {" "}for a rapidly evolving world. At ICS Global, we believe that the future of institutions lies at the intersection of human insight and artificial intelligence. Founded a decade ago, we operate at the intersection of education, industry, and technology — co-creating learning experiences that prepare learners for tomorrow&#39;s opportunities while advancing each partner university&#39;s strategic vision.
          </span>
        </p>
        <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-1 rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity">
          <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
            Partner for Transformation
          </span>
          <img
            className="w-5 h-5"
            alt="Arrow"
            src="https://c.animaapp.com/nj999vRB/img/arrow-up-left-4.svg"
          />
        </button>
      </div>
    </div>
  );
};
