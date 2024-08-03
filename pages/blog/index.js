import BlogCard from "@/common/BlogCard";
import Footer from "@/common/Footer";

const { default: Banner } = require("@/common/Banner");
const { default: Header } = require("@/common/Header");
const { default: WhatsAppButton } = require("@/common/WhatsAppButton");
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { useEffect } from "react";
const Blog = () => {
  return (
    <>
    <Head>
      <title>Budget-Friendly Wedding Planning: Making Your Dream Day Affordable</title>
      <Head>
          <meta name="description" content='Discover expert event planning tips and inspiration on our blog. From weddings to corporate events, Rituals of Love offers insights, trends, and advice to make your special occasions unforgettable. Join us for practical guides and creative ideas to elevate your events'></meta>
          <meta
          name="keywords"
          content='The Ultimate Event Planning Checklist: Everything You Need to Know,Top 10 Event Planning Tips for a Flawless Celebration,Creative Event Ideas: How to Make Your Event Stand Out,How to Plan a Wedding: Expert Advice from Professional Event Planners,Event Planning Trends for 2024: What`s Hot and What`s Not'
        />
        </Head>
    </Head>
      <main className={"overflow-hidden"}>
        <WhatsAppButton />
        <Header />
        <Banner
          title={"Our Blogs"}
        />
        <BlogCard/>
        <Footer />
      </main>
    </>
  );
};
export default Blog;