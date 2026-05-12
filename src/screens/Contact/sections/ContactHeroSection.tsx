export const ContactHeroSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="flex flex-col items-center text-center px-4 pt-[clamp(100px,12vw,200px)] pb-[clamp(24px,4vw,60px)] relative z-10"
    >
      <div className="flex flex-col max-w-screen-md items-center w-full gap-3">
        <h1
          id="contact-hero-heading"
          className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-[clamp(28px,2.9vw,56px)] text-center tracking-[0.88px] leading-[1.3]"
        >
          <span className="text-white">Get In </span>
          <span className="text-white">Touch</span>
        </h1>
        <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-base md:text-lg text-center leading-7">
          Feel free to reach out to us with any questions, feedback, or inquiries.
        </p>
      </div>
    </section>
  );
};
