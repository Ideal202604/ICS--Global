const serviceColumns = [
  [
    "1. Workforce Training & Tech Skill Development",
    "2. Learning & Development (L&D) Frameworks",
    "3. Knowledge Management & Documentation Systems",
    "4. Product & Platform Consulting",
  ],
  [
    "5. Branding & Market Positioning",
    "6. Digital Marketing & Growth Strategy",
    "7. Employer Branding & Thought Leadership Content",
    "8. CSR & Community Development Initiatives",
  ],
];

export const ManufacturingSolutionsSection = (): JSX.Element => {
  return (
    <section
      id="section-it-ites"
      aria-labelledby="it-ites-title"
      className="w-full"
    >
      <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img
              className="w-full h-auto rounded-2xl object-cover"
              style={{ maxHeight: "490px" }}
              alt="IT and ITeS services"
              src="https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40235.png"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
            <h2
              id="it-ites-title"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] text-[32px] md:text-[44px] font-normal leading-[54px] tracking-[0.88px] text-gray-900"
            >
              IT &amp; ITeS
            </h2>
            <p className="[font-family:'Poppins',Helvetica] text-base md:text-lg font-normal leading-7 text-gray-700">
              We enable companies to strengthen technical capability, optimise processes through AI, and establish a strong market presence through strategic branding and communication. Our approach integrates technology, talent development, and market positioning, ensuring scalable growth, innovation, and long-term sustainability.
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
        </div>
      </div>
    </section>
  );
};
