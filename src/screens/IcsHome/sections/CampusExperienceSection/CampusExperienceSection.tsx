const blogPosts = [
  {
    id: 1,
    image: "https://c.animaapp.com/nj999vRB/img/image@2x.png",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/nj999vRB/img/image-1@2x.png",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/nj999vRB/img/image-3@2x.png",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
  {
    id: 4,
    image: "https://c.animaapp.com/nj999vRB/img/image-3@2x.png",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
  {
    id: 5,
    image: "https://c.animaapp.com/nj999vRB/img/image@2x.png",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
];

interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => (
  <div className="flex flex-row bg-white rounded-[8px] overflow-hidden shadow-md flex-shrink-0 w-[300px] sm:w-[340px] h-[160px]">
    <div className="w-[130px] sm:w-[140px] h-full flex-shrink-0 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col justify-between px-3 sm:px-[14px] py-[14px] flex-1 min-w-0">
      <div className="flex flex-col gap-1.5">
        <h3
          className="text-[#1a1a2e] text-[13px] sm:text-[14px] font-semibold leading-5 tracking-[0px] line-clamp-2"
          style={{ fontFamily: "'Inter', Helvetica" }}
        >
          {post.title}
        </h3>
        <p
          className="text-[#4a4a6a] text-[11px] sm:text-[12px] font-normal leading-[18px] tracking-[0px] line-clamp-2"
          style={{ fontFamily: "'Inter', Helvetica" }}
        >
          {post.description}
        </p>
      </div>
      <a
        href="#"
        className="flex items-center gap-[4px] text-[#1a5fa8] text-[12px] sm:text-[13px] font-semibold leading-5 tracking-[0px] hover:underline transition-all"
        style={{ fontFamily: "'Inter', Helvetica" }}
      >
        Learn more
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
            stroke="#1a5fa8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  </div>
);

export const CampusExperienceSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#1a5fa8] py-12 md:py-16 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-10 px-4 text-center">
        <h2
          className="text-white text-2xl md:text-[32px] font-semibold leading-[40px] tracking-[0px]"
          style={{ fontFamily: "'Inter', Helvetica" }}
        >
          Blogs and guides
        </h2>
        <p
          className="text-white text-base font-normal leading-6 tracking-[0px] opacity-90"
          style={{ fontFamily: "'Inter', Helvetica" }}
        >
          Your Learning Hub for Ideas, Strategies &amp; Breakthroughs.
        </p>
      </div>

      {/* Cards strip */}
      <div className="px-4 md:px-10 lg:px-[60px]">
        {/* Mobile/tablet: horizontal scroll */}
        <div className="flex gap-4 md:gap-5 overflow-x-auto pb-4 scrollbar-hide lg:hidden">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        {/* Desktop: grid */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
