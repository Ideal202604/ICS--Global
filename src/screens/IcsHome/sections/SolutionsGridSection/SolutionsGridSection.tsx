import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "K–12 Education",
    description: "We support K–12 schools in creating and redesigning educational content while strictly adhering to curriculum standards...",
    imageSrc: "https://c.animaapp.com/nj999vRB/img/container.svg",
    bgImage: null,
    overlayIcon: null,
    anchor: "section-k12",
  },
  {
    title: "Higher Education",
    description: "We design, develop, and standardize diverse learning content for institutions worldwide...",
    imageSrc: null,
    bgImage: "https://c.animaapp.com/nj999vRB/img/image--higher-education-.png",
    overlayIcon: "https://c.animaapp.com/nj999vRB/img/container-1.svg",
    anchor: "section-higher-education",
  },
  {
    title: "EdTech",
    description: "We support the EdTech sector in reshaping modern learning with robust cross-platform solutions...",
    imageSrc: "https://c.animaapp.com/nj999vRB/img/container-2.svg",
    bgImage: null,
    overlayIcon: null,
    anchor: "section-edtech",
  },
  {
    title: "Publishing",
    description: "Our high-quality editorial and pre-press services enable publishers to design, develop, review, and deliver...",
    imageSrc: "https://c.animaapp.com/nj999vRB/img/container-3.svg",
    bgImage: null,
    overlayIcon: null,
    anchor: "section-publishing",
  },
  {
    title: "Corporate",
    description: "We support corporates with eLearning solutions designed to enhance onboarding, compliance, and workforce capability...",
    imageSrc: null,
    bgImage: "https://c.animaapp.com/nj999vRB/img/image--corporate-.png",
    overlayIcon: "https://c.animaapp.com/nj999vRB/img/container-4.svg",
    anchor: "section-corporate",
  },
  {
    title: "Manufacturing",
    description: "We support manufacturing companies with technology-driven eLearning modules that address workforce skilling...",
    imageSrc: "https://c.animaapp.com/nj999vRB/img/container-5.svg",
    bgImage: null,
    overlayIcon: null,
    anchor: "section-manufacturing",
  },
  {
    title: "IT & ITeS",
    description: "In response to the evolving training needs of the IT & ITeS industry, we offer end-to-end solutions for...",
    imageSrc: "https://c.animaapp.com/nj999vRB/img/container-6.svg",
    bgImage: null,
    overlayIcon: null,
    anchor: "section-it-ites",
  },
  {
    title: "Branding & Marketing",
    description: "Strategic branding and high-performance marketing crafted to position your business ahead of the curve...",
    imageSrc: "https://c.animaapp.com/nj999vRB/img/container-7.svg",
    bgImage: null,
    overlayIcon: null,
    anchor: "section-branding",
  },
];

export const SolutionsGridSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLearnMore = (anchor: string) => {
    navigate(`/services#${anchor}`);
    // After navigation, scroll to the target element with a small delay
    setTimeout(() => {
      const el = document.getElementById(anchor);
      if (el) {
        const offset = 80; // navbar height offset
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col bg-white rounded-2xl overflow-hidden border border-solid border-gray-100 shadow-[0px_10px_30px_#0000000d] w-full card-hover"
        >
          {card.bgImage ? (
            <div
              className="w-full h-52 bg-cover bg-center relative flex-shrink-0"
              style={{ backgroundImage: `url(${card.bgImage})` }}
            >
              {card.overlayIcon && (
                <img
                  className="absolute bottom-4 left-1 w-[72px] h-[66px]"
                  alt="Icon"
                  src={card.overlayIcon}
                />
              )}
            </div>
          ) : (
            <img
              className="w-full h-52 object-cover flex-shrink-0"
              alt={card.title}
              src={card.imageSrc!}
            />
          )}
          <div className="flex flex-col p-5 md:p-6 gap-3 flex-1">
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#111111] text-base md:text-lg leading-[1.5]">
              {card.title}
            </h3>
            <p className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm md:text-[15px] leading-6 flex-1">
              {card.description}
            </p>
            <button
              type="button"
              onClick={() => handleLearnMore(card.anchor)}
              className="all-[unset] box-border inline-flex items-center gap-2 cursor-pointer mt-2 hover:opacity-80 transition-opacity"
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-blue-600 text-sm md:text-[15px] leading-[22.5px]">
                Learn More
              </span>
              <img
                className="w-4 h-4"
                alt="Icon"
                src="https://c.animaapp.com/nj999vRB/img/icon-7.svg"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
