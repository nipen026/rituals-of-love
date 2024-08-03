import { BlogJson } from "@/blog";
import Link from "next/link";

const BlogCard = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {BlogJson.map((items, index) => {
              const backgroundImageClass = `url('/assets/images/blog-${index+1}.jpg')`
              return (
                <>
                  <div className="p-4 lg:w-1/3" key={index}  data-aos="flip-left">
                    <div
                    style={{backgroundImage:backgroundImageClass}}
                      className={`h-full  bg-opacity-75 bg-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative`}
                    >
                      <div className="absolute inset-0 bg-black opacity-60"></div>
                     <div className="relative text-white z-10">
                     <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                        Event Planner
                      </h2>
                      <h4 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                        {items.title}
                      </h4>
                      <p className="leading-relaxed text-white mb-3">
                        {items.description}
                      </p>
                      <Link href={`/blog/${items.id}`}  className="bg-white shadow-2xl transition duration-150 ease-out text-[#002642] hover:bg-[#002642] hover:text-white p-3 rounded-lg inline-flex items-center">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogCard;
