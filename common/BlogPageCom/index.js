import { BlogJson } from "@/blog";

const BlogPageCom = (props) => {
  const backgroundImageClass = `url('/assets/images/blog-${props.id}.jpg')`;
  const result = BlogJson.find((obj) => {
    return obj.id == props?.id;
  });
  return (
    <>
      <section class="text-gray-600 body-font">
        <div
          style={{ backgroundImage: backgroundImageClass }}
          class="bg-cover bg-center h-[calc(100vh-70px)] mx-auto flex items-center flex-wrap relative"
        >
          <div className="absolute inset-0 bg-black opacity-[0.7]"></div>
          <div class=" mx-auto">
            <div
              class={`flex items-center flex-wrap w-full bg-cover relative mb-4`}
            >
              <div
                class="text-center relative z-10 max-w-[70%] max-lg:max-w-full mx-auto"
                data-aos="zoom-in"
              >
                <h5 class="text-[40px] max-md:text-[30px] text-white font-medium title-font font-cursive mb-2 ">
                  {result?.title}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3875385789969723"
        crossorigin="anonymous"
      ></script>
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-format="fluid"
        data-ad-layout-key="-ef+6k-30-ac+ty"
        data-ad-client="ca-pub-3875385789969723"
        data-ad-slot="2054299452"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <div className="blog-wrapper container" data-aos="zoom-out-right">
        <div dangerouslySetInnerHTML={{ __html: result?.content }} />
      </div>
    </>
  );
};

export default BlogPageCom;
