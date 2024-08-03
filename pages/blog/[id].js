import { BlogJson } from "@/blog"
import BlogPageCom from "@/common/BlogPageCom"
import Footer from "@/common/Footer"
import Header from "@/common/Header"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

const BlogItem = () =>{
    const router = useRouter()
    const { id } = router.query;
    const result = BlogJson.find((obj) => {
        return obj.id == id;
      });
      useEffect(() => {
        const initWOW = async () => {
          if (typeof window !== 'undefined') {
            const WOW = (await import('wowjs')).WOW;
            new WOW().init();
          }
        };
    
        initWOW();
      }, []);
    return(
        <>
        <Head>
          <title>Blog – {result?.title}</title>
          <meta name="description" content={result?.description}></meta>
          <meta
          name="keywords"
          content={result?.keyword}
        />
        </Head>
        <div className="overflow-hidden">
        <Header/>
        <BlogPageCom id={id}/>
        <Footer/>
        </div>
        </>
    )
}

export default BlogItem;