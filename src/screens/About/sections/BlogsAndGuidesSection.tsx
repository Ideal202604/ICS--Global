import { useState, useEffect, useCallback, useRef, TouchEvent as RTE, MouseEvent as RME } from "react";

const blogCards = [
  {
    image: "https://c.animaapp.com/mo857b66QKlwSd/img/image.png",
    imageAlt: "Classroom interior with desks and chairs",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
  {
    image: "https://c.animaapp.com/mo857b66QKlwSd/img/image-1.png",
    imageAlt: "People collaborating around a wooden table",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
  {
    image: "https://c.animaapp.com/mo857b66QKlwSd/img/image-3.png",
    imageAlt: "School campus building with a running track",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
];

export const BlogsAndGuidesSection = (): JSX.Element => {
  const total = blogCards.length;
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  const extendedCards = [blogCards[total - 1], ...blogCards, blogCards[0]];
  const displayIndex = index + 1;
  const needsSnap = index >= total || index < 0;
  const snapDisplayIndex = index >= total ? 1 : index < 0 ? total : displayIndex;
  const showTransition = isAnimating && !needsSnap;
  const currentDisplayIdx = needsSnap ? snapDisplayIndex : displayIndex;

  const goTo = useCallback((next: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex(next);
  }, [isAnimating]);

  const goNext = useCallback(() => {
    goTo(index + 1);
  }, [index, goTo]);

  const goPrev = useCallback(() => {
    goTo(index - 1);
  }, [index, goTo]);

  // Auto-slide every 3.5s
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIsAnimating(true);
      setIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  // Infinite loop snap
  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);
    setIndex((prev) => {
      if (prev >= total) return 0;
      if (prev < 0) return total - 1;
      return prev;
    });
  }, [total]);

  /* ── Touch / drag support ── */
  const dragState = useRef({ startX: 0, dragging: false });
  const SWIPE_THRESHOLD = 50;

  const onPointerDown = (clientX: number) => {
    dragState.current = { startX: clientX, dragging: true };
    setPaused(true);
  };
  const onPointerUp = (clientX: number) => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;
    const diff = dragState.current.startX - clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setPaused(false);
  };

  const handleTouchStart = (e: RTE<HTMLDivElement>) => onPointerDown(e.touches[0].clientX);
  const handleTouchEnd = (e: RTE<HTMLDivElement>) => onPointerUp(e.changedTouches[0].clientX);
  const handleMouseDown = (e: RME<HTMLDivElement>) => { e.preventDefault(); onPointerDown(e.clientX); };
  const handleMouseUp = (e: RME<HTMLDivElement>) => onPointerUp(e.clientX);
  const handleMouseLeave = (e: RME<HTMLDivElement>) => { if (dragState.current.dragging) onPointerUp(e.clientX); setPaused(false); };

  const realIndex = ((index % total) + total) % total;

  return (
    <section
      aria-labelledby="about-blogs-heading"
      className="w-full relative overflow-hidden"
      style={{
        paddingTop: "clamp(56px, 5.8vw, 112px)",
        paddingBottom: "clamp(56px, 5.8vw, 112px)",
        backgroundColor: "#1566a0",
      }}
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
          <div className="flex flex-col items-center gap-4 max-w-[768px] mx-auto text-center">
            <h2
              id="about-blogs-heading"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white tracking-[0.88px] leading-[54px] w-full"
              style={{ fontSize: "clamp(28px, 2.3vw, 44px)" }}
            >
              Blogs and guides
            </h2>
            <p
              className="[font-family:'Poppins',Helvetica] font-normal text-white leading-7 tracking-[0] w-full"
              style={{ fontSize: "clamp(15px, 0.94vw, 18px)" }}
            >
              Your Learning Hub for Ideas, Strategies &amp; Breakthroughs.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative select-none cursor-grab active:cursor-grabbing"
          onMouseEnter={() => { if (!dragState.current.dragging) setPaused(true); }}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next slide"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          {/* Overflow wrapper */}
          <div className="overflow-hidden mx-6 md:mx-16 lg:mx-24">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentDisplayIdx * 100}%)`,
                transition: showTransition ? "transform 0.6s ease-in-out" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedCards.map((card, i) => (
                <div
                  key={`blog-card-${i}`}
                  className="w-full flex-shrink-0 px-4"
                >
                  <article className="relative flex items-start overflow-hidden rounded-2xl border border-solid border-white bg-white shadow-md max-w-[592px] mx-auto">
                    <img
                      className="self-stretch object-cover flex-shrink-0"
                      style={{ width: "clamp(110px, 13.5vw, 260px)" }}
                      alt={card.imageAlt}
                      src={card.image}
                      loading="lazy"
                    />
                    <div className="flex flex-1 flex-col items-start justify-between gap-5 p-5 md:p-8 h-full">
                      <div className="flex flex-col items-start gap-2 w-full">
                        <h3
                          className="[font-family:'Inter',Helvetica] font-semibold leading-7 tracking-[0] text-gray-900 w-full"
                          style={{ fontSize: "clamp(14px, 0.94vw, 18px)" }}
                        >
                          {card.title}
                        </h3>
                        <p
                          className="[font-family:'Inter',Helvetica] font-normal leading-6 tracking-[0] text-gray-600 w-full"
                          style={{ fontSize: "clamp(12px, 0.83vw, 16px)" }}
                        >
                          {card.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="all-[unset] box-border inline-flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                        aria-label={`Learn more about ${card.title}`}
                      >
                        <span
                          className="[font-family:'Inter',Helvetica] font-medium leading-6 tracking-[0] text-[#0072de]"
                          style={{ fontSize: "clamp(12px, 0.83vw, 16px)" }}
                        >
                          Learn more
                        </span>
                        <img
                          className="w-5 h-5"
                          alt=""
                          src="https://c.animaapp.com/mo857b66QKlwSd/img/chevron-right.svg"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {blogCards.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => { setIsAnimating(true); setIndex(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${realIndex === i ? "bg-white scale-125" : "bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
