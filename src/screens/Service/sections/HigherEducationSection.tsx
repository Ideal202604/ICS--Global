const servicesLeft = [
  "1. Curriculum & Course Content Development",
  "2. AI-Enabled Learning Solutions",
  "3. Instructional Design & Learning Experience (LX) Design",
  "4. Content Strategy & Knowledge Architecture",
];

const servicesRight = [
  "5. Platform & Product Consulting",
  "6. Assessment & Certification Frameworks",
  "7. Digital Content Production & Multimedia Learning",
  "8. Branding, Go-To-Market & Growth Strategy",
];

export const HigherEducationSection = (): JSX.Element => {
  return (
    <section
      id="section-edtech"
      aria-labelledby="ed-tech-sector-heading"
      className="w-full"
    >
      <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img
              className="w-full h-auto rounded-2xl object-cover"
              style={{ maxHeight: "490px" }}
              alt="Ed-Tech sector illustration"
              src="https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40230.png"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
            <h2
              id="ed-tech-sector-heading"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] text-[32px] md:text-[44px] font-normal leading-[54px] tracking-[0.88px] text-gray-900"
            >
              Ed-Tech Sector
            </h2>
            <p className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">
              We combine quality content, AI-enabled systems, and learner-centric design to help Ed-Tech platforms create engaging, outcome-oriented, and globally relevant educational products. Our approach ensures that technology is not just innovative—but meaningful, accessible, and sustainable.
            </p>
            <h3 className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-semibold leading-7 text-gray-900">
              Our Services Include:
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <ul className="flex-1 flex flex-col gap-0 list-none p-0 m-0">
                {servicesLeft.map((s) => (
                  <li key={s} className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">{s}</li>
                ))}
              </ul>
              <ul className="flex-1 flex flex-col gap-0 list-none p-0 m-0">
                {servicesRight.map((s) => (
                  <li key={s} className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
