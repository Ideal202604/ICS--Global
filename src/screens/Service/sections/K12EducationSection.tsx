const serviceColumns = [
  [
    "1. Academic Program Development & Curriculum Design",
    "2. Research Development & Publication Support",
    "3. AI-Enabled Academic & Administrative Systems",
    "4. Faculty Development & Academic Leadership Training",
  ],
  [
    "5. Institutional Strategy & Accreditation Support",
    "6. Skill Development & Industry Integration",
    "7. Digital Transformation & Knowledge Ecosystem",
    "8. Centre of Excellence, Innovation and Incubation Set-up",
  ],
];

export const K12EducationSection = (): JSX.Element => {
  return (
    <section
      id="section-higher-education"
      aria-labelledby="higher-education-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 order-2 lg:order-1">
            <h2
              id="higher-education-heading"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] text-[32px] md:text-[44px] font-normal leading-[54px] tracking-[0.88px] text-gray-900"
            >
              Higher Education
            </h2>
            <p className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">
              We enable institutions to enhance quality education, strengthen research and innovation, integrate AI-driven systems, and contribute meaningfully to community development and sustainable progress. Our approach transforms higher education institutions into centres of excellence, knowledge creation, and global relevance.
            </p>
            <h3 className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-semibold leading-7 text-gray-900">
              Our Services Include:
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              {serviceColumns.map((column, ci) => (
                <ul key={ci} className="flex-1 flex flex-col gap-0 list-none p-0 m-0">
                  {column.map((service) => (
                    <li key={service} className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">
                      {service}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-shrink-0 order-1 lg:order-2">
            <img
              className="w-full h-auto rounded-2xl object-cover"
              style={{ maxHeight: "490px" }}
              alt="Higher education representative standing in a library or classroom setting"
              src="https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40229.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
