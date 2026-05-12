const servicesColumnOne = [
  "1. Curriculum Design & Academic Structuring",
  "2. AI-Enabled Learning Systems",
  "3. Teacher Training & Capacity Building",
  "4. School Strategy & Institutional Consulting",
];

const servicesColumnTwo = [
  "5. Assessment & Evaluation Frameworks",
  "6. Digital Transformation & Automation",
  "7. Value-based Promotional and Awareness",
  "8. Modern Lab Set Consultation",
];

export const SignatureOfferingsIntroSection = (): JSX.Element => {
  return (
    <section
      id="section-k12"
      aria-labelledby="k12-heading"
      className="w-full max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 py-12 md:py-16"
    >
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <img
            className="w-full h-auto rounded-2xl object-cover"
            style={{ maxHeight: "490px" }}
            alt="Student using a laptop in a learning environment"
            src="https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40228.png"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
          <h2
            id="k12-heading"
            className="[font-family:'Belgiano_Serif-Regular',Helvetica] text-[32px] md:text-[44px] font-normal leading-[54px] tracking-[0.88px] text-gray-900"
          >
            K&#8211;12 Education
          </h2>
          <p className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">
            We move beyond traditional schooling to create structured, student-centric ecosystems where learning is experiential, educators are empowered, and institutions are aligned with the evolving demands of the modern world.
          </p>
          <h3 className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-semibold leading-7 text-gray-900">
            Our Services Include:
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <ul className="flex-1 flex flex-col gap-0 list-none p-0 m-0">
              {servicesColumnOne.map((s) => (
                <li key={s} className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">{s}</li>
              ))}
            </ul>
            <ul className="flex-1 flex flex-col gap-0 list-none p-0 m-0">
              {servicesColumnTwo.map((s) => (
                <li key={s} className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
