interface BlogCardProps {
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
  image: string;
  authorImage: string;
}

export const BlogCard = ({
  category,
  date,
  readTime,
  title,
  description,
  author,
  image,
  authorImage,
}: BlogCardProps): JSX.Element => {
  return (
    <article className="flex flex-col items-start gap-6 p-6 rounded-lg border border-solid border-[#cdcdcd] bg-white w-full">
      <div
        className="relative w-full h-[220px] sm:h-[260px] md:h-[285px] overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={title}
      >
        <div className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#00000080] px-2.5 py-1.5 absolute top-4 left-4">
          <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm leading-5 whitespace-nowrap">
            {category}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 w-full">
        <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base leading-6">
          {date}&nbsp;&nbsp;&nbsp;&nbsp;{readTime}
        </p>
        <div className="flex flex-col items-start w-full">
          <h3 className="[font-family:'Poppins',Helvetica] font-medium text-gray-900 text-xl leading-[30px] w-full">
            {title}
          </h3>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base leading-6 w-full">
            {description}
          </p>
        </div>
        <div className="inline-flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            alt={author}
            src={authorImage}
          />
          <span className="[font-family:'Poppins',Helvetica] font-medium text-gray-900 text-base leading-[30px] whitespace-nowrap">
            {author}
          </span>
        </div>
      </div>
    </article>
  );
};
