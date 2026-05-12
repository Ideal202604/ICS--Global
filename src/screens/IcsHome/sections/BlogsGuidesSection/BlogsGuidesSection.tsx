import { useState, useEffect, useCallback, useRef, TouchEvent as RTE, MouseEvent as RME } from "react";

const blogPosts = [
  {
    id: 1,
    image: "https://c.animaapp.com/nj999vRB/img/image-3@2x.png",
    title: "Expanding your product business",
    excerpt: "Explore cost-effective marketing strategies to position your product for growth in competitive markets and build a lasting brand presence.",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/nj999vRB/img/image-1@2x.png",
    title: "Expanding your product business",
    excerpt: "Explore cost-effective marketing strategies to position your product for growth in competitive markets and build a lasting brand presence.",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/nj999vRB/img/image-3@2x.png",
    title: "Expanding your product business",
    excerpt: "Explore cost-effective marketing strategies to position your product for growth in competitive markets and build a lasting brand presence.",
  },
];

export const BlogsGuidesSection = (): JSX.Element => {
  const total = blogPosts.length;
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Handle infinite loop snap after transition ends
  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);
    setIndex((prev) => {
      if (prev >= total) return 0;
      if (prev < 0) return total - 1;
      return prev;
    });
  }, [total]);

  // For the infinite loop we need: [clone-last, ...real, clone-first]
  // But percentage-based with clones needs careful handling.
  // Simpler: use modular index with a snap trick.
  // We'll use the clone approach: 5 slides [last, 0, 1, 2, first]
  // translateX offset = -(currentDisplayIndex) * 100%
  // currentDisplayIndex is index+1 (because clone-last is at position 0)

  const extendedPosts = [blogPosts[total - 1], ...blogPosts, blogPosts[0]];
  // Display index: index + 1 maps to the real slide position in extended array
  const displayIndex = index + 1;

  // When snap happens (after transition), we need to instantly jump
  const needsSnap = index >= total || index < 0;
  const snapDisplayIndex = index >= total ? 1 : index < 0 ? total : displayIndex;

  // After snap, re-enable transition
  useEffect(() => {
    if (needsSnap) {
      // Instant jump after the animated transition ends
      // handleTransitionEnd already resets index, which triggers a re-render without transition
    }
  }, [needsSnap]);

  // Compute transform
  const showTransition = isAnimating && !needsSnap;
  const currentDisplayIdx = needsSnap ? snapDisplayIndex : displayIndex;

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

  // Real index for dots (0-based)
  const realIndex = ((index % total) + total) % total;

  return (
    <div className="w-full relative">
      {/* Background */}
      <img
        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        alt="Rectangle background"
        src="https://c.animaapp.com/nj999vRB/img/rectangle-39437.svg"
      />

      {/* SVG decorative group */}
      <img
        className="absolute inset-0 w-full h-full object-fill opacity-30 pointer-events-none"
        alt="Decorative group"
        src="https://c.animaapp.com/nj999vRB/img/group-40222_1.svg"
      />

      {/* Content wrapper */}
      <div className="relative flex flex-col items-center gap-12 pt-16 pb-20 px-4">
        {/* Section header */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[768px] px-4">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[clamp(28px,2.3vw,44px)] text-center tracking-[0.88px] leading-[54px]">
            Blogs and guides
          </div>
          <p className="self-stretch font-normal text-white text-lg text-center leading-7 relative [font-family:'Poppins',Helvetica] tracking-[0]">
            Your Learning Hub for Ideas, Strategies &amp; Breakthroughs.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative w-full select-none cursor-grab active:cursor-grabbing"
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
              {extendedPosts.map((post, i) => (
                <div
                  key={`blog-slide-${i}`}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="flex items-start bg-white rounded-2xl overflow-hidden border border-solid border-[#e5e7eb] max-w-[592px] mx-auto">
                    {/* Card image */}
                    <img
                      className="self-stretch object-cover flex-shrink-0"
                      style={{ width: "clamp(110px, 13.5vw, 220px)" }}
                      alt={post.title}
                      src={post.image}
                    />

                    {/* Card content */}
                    <div className="flex flex-col items-start gap-6 p-5 md:p-8 relative flex-1 grow">
                      <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                        <div className="relative self-stretch [font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-[#111111] text-[clamp(16px,1.25vw,24px)] tracking-[0.48px] leading-[32px]">
                          {post.title}
                        </div>
                        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-6">
                          {post.excerpt}
                        </p>
                      </div>

                      <button className="all-[unset] box-border inline-flex items-center gap-2 cursor-pointer group">
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-[#0e467a] text-base tracking-[0] leading-6 whitespace-nowrap group-hover:underline">
                          Learn more
                        </span>
                        <img
                          className="w-5 h-5"
                          alt="Chevron right"
                          src="https://c.animaapp.com/nj999vRB/img/chevron-right-3.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {blogPosts.map((_, i) => (
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
    </div>
  );
};
