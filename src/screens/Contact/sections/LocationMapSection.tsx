const contactItems = [
  {
    title: "Address",
    description: ["S. No. 138/1, City Centre, Office No. 211,"],
    value: "Hinjawadi, Phase 1, Pune, Maharashtra 411057",
    iconSrc: "https://c.animaapp.com/mo9oe40uKob8r6/img/featured-icon.svg",
    iconAlt: "Address icon",
    isAddress: true,
    href: "https://www.google.com/maps/place/Idealizeer+Content+Solutions+Private+Limited/@18.5863645,73.7360261,17z/",
  },
  {
    title: "Phone",
    description: ["Call us for immediate assistance"],
    value: "+91 98904 51547",
    iconSrc: "https://c.animaapp.com/mo9oe40uKob8r6/img/featured-icon-2.svg",
    iconAlt: "Phone icon",
    isAddress: false,
    href: "tel:+919890451547",
  },
  {
    title: "Email",
    description: ["Send inquiries via email for support"],
    value: "info@idealizeer.com",
    iconSrc: "https://c.animaapp.com/mo9oe40uKob8r6/img/featured-icon-1.svg",
    iconAlt: "Email icon",
    isAddress: false,
    href: "mailto:info@idealizeer.com",
  },
] as const;

export const LocationMapSection = (): JSX.Element => {
  return (
    <section
      aria-label="Contact information"
      className="w-full"
    >
      <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-14 md:py-20">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-11">
          {contactItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col w-full md:w-96 items-center gap-5"
            >
              <img
                className="w-12 h-12"
                alt={item.iconAlt}
                src={item.iconSrc}
              />
              <div className="flex flex-col items-center gap-2 w-full">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-2xl tracking-[0.48px] leading-8 whitespace-nowrap">
                  {item.title}
                </h3>
                {item.description.map((line, index) => (
                  <p
                    key={`${item.title}-desc-${index}`}
                    className="[font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-6 text-center"
                  >
                    {line}
                  </p>
                ))}
              </div>
              {item.isAddress ? (
                <address className="not-italic w-full">
                  <a
                    href={item.href ?? undefined}
                    target="_blank"
                    rel="noreferrer"
                    className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base text-center leading-6 block w-full hover:opacity-80 transition-opacity"
                  >
                    {item.value}
                  </a>
                </address>
              ) : (
                <a
                  href={item.href ?? undefined}
                  className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base text-center leading-6 w-full hover:opacity-80 transition-opacity"
                >
                  {item.value}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
