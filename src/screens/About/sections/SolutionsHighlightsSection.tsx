import { useState } from "react";

const solutionItems = [
  {
    title: "Academic Excellence & Research Development",
    description:
      "Strengthening research capabilities, publication quality, and academic structuring.",
  },
  {
    title: "Institutional Strategy & Sustainable Growth",
    description:
      "Designing long-term institutional roadmaps, governance frameworks, and accreditation strategies.",
  },
  {
    title: "Capacity Building & Future Skills",
    description:
      "Equipping faculty, staff, and students with competencies that drive employability and innovation.",
  },
  {
    title: "Digital Knowledge & Content Ecosystem",
    description:
      "Creating rich, AI-powered learning content and digital platforms for scalable knowledge delivery.",
  },
];

const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    aria-hidden="true"
    className={`h-11 w-11 flex-none transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
    fill="none"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 26L22 18L30 26"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const SolutionsHighlightsSection = (): JSX.Element => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section
      aria-labelledby="solutions-highlights-heading"
      className="flex flex-col items-start gap-8 w-full"
    >
      {/* Header */}
      <header className="flex flex-col items-start gap-4">
        <h2
          id="solutions-highlights-heading"
          className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-black tracking-[0.88px] leading-[54px]"
          style={{ fontSize: "clamp(28px, 2.3vw, 44px)" }}
        >
          OUR SOLUTIONS
        </h2>
        <p
          className="[font-family:'Poppins',Helvetica] font-normal text-gray-900 leading-8 tracking-[0]"
          style={{ fontSize: "clamp(16px, 1.25vw, 24px)" }}
        >
          An Integrated Ecosystem for Holistic Development
        </p>
      </header>

      {/* Accordion list */}
      <div className="flex flex-col items-start w-full divide-y divide-gray-200">
        {solutionItems.map((item, index) => (
          <article key={item.title} className="w-full">
            <button
              type="button"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? -1 : index)
              }
              aria-expanded={expandedIndex === index}
              aria-controls={`sol-panel-${index}`}
              className="all-[unset] box-border flex items-center justify-between w-full gap-4 py-4 md:py-5 cursor-pointer text-left"
            >
              <h3
                className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-primary-4 tracking-[0.64px] leading-[42px] flex-1"
                style={{ fontSize: "clamp(18px, 1.67vw, 32px)" }}
              >
                {item.title}
              </h3>
              <span className="text-primary-4 flex-shrink-0">
                <ChevronIcon expanded={expandedIndex === index} />
              </span>
            </button>

            <div
              id={`sol-panel-${index}`}
              role="region"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index && item.description
                  ? "max-h-40 opacity-100 pb-5"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p
                className="[font-family:'Poppins',Helvetica] font-normal text-gray-900 leading-7 tracking-[0]"
                style={{ fontSize: "clamp(14px, 0.94vw, 18px)" }}
              >
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
