"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { CircleUserRound, User } from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import "react-quill/dist/quill.snow.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

// export const metadata: Metadata = {
//   title: 'Invoices',
// };
export default function Content({ blogInfo }) {
  // const [blogInfo, setBlogInfo] = useState([]);

  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);


  function formatDate(dateString) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  

  return (
    <>
      <head>
        <title>{blogInfo?.metatitle || "sikshahelpline"}</title>
        <meta name="description" content={blogInfo?.metadesc || ""} />
        <meta property="og:title" content={blogInfo?.metatitle || ""} key="title" />
        <meta property="og:description" content={blogInfo?.metadesc || ""} />
        <meta property="og:image" content={blogInfo?.cardImage || ""} />
        <meta name="author" content={blogInfo?.author || "sikshahelpline"} />
        <meta name="keywords" content={blogInfo?.keywords || ""} />
        <meta
          property="og:url"
          content={`http://sikshahelpline.com/blogs/view/${blogInfo?.url || ""}`}
        />
        <link
          rel="canonical"
          href={`http://sikshahelpline.com/blogs/view/${blogInfo?.url || ""}`}
        />
      </head>


      <Navbar />

      <div className="container lg:px-32 py-5">
        <div className="flex max-sm:flex-col">
          <div className="w-2/3 px-2 max-sm:w-full">
            <div className="flex justify-center w-full p-3">
              <img
                src={blogInfo?.cardImage}
                loading="lazy"
                alt="Card image"
                className="mt-5 rounded w-[100%]"
              />
            </div>

            <div className="flex-row justify-center">
              <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-3 text-center">
                  {blogInfo?.title}
                </h1>
                {/* <p className="text-sm text-gray-500">{blogInfo?.author}</p> */}
                <div className="flex justify-center items-center">
                  <p className="text-sm text-gray-500 flex items-center">
                    <User size={16} /> Published by{" "}
                    {blogInfo?.author ? blogInfo?.author : "N/A"}
                  </p>
                  <span className="px-2 text-slate-400">|</span>
                  <p className="text-sm text-gray-500">
                    {formatDate(blogInfo?.createdAt)}
                  </p>
                </div>

                <hr class="h-px my-8 dark:bg-gray-700" />

                <div
                  className="text-lg blog_content"
                  style={{ all: "initial" }}
                  dangerouslySetInnerHTML={{ __html: blogInfo?.content }}
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 px-2 max-sm:w-full max-sm:mt-5 border-l">
            <div className="border w-full h-[300px] rounded mb-2">
              {/* <img
                src="https://d1csarkz8obe9u.cloudfsdsront.net/posterpreviews/higher-education-ad-template-design-5f1fffa627c42e7bbe32dcb59346de49_screen.jpg?ts=1643693093"
                alt="advertisement"
                className="w-full h-full rounded"
              /> */}
            </div>
            <div className="border w-full h-[300px] rounded mb-2">
              {/* <img
                src="https://d1csarkz8obe9u.cloudfronsdt.net/posterpreviews/higher-education-ad-template-design-71efd4127f00354d3064c25209dd6b77_screen.jpg?ts=1640955053"
                alt="advertisement"
                className="w-full h-full rounded"
              /> */}
            </div>

            <div className="w-full rounded mb-2 mt-5">
              <h5 className="text-black font-semibold text-xl mb-4">
                Suggested Posts
              </h5>
              <div className="marquee">
                <div className="marquee-content">
                  {blogs.length > 0 ? (
                    blogs.map((blog) => (
                      <div key={blog.id} className="flex mb-2 py-2">
                        <img
                          src={blog.cardImage}
                          alt={blog.title}
                          className="w-[80px] h-[80px] rounded mr-2"
                        />
                        <div className="flex flex-col justify-between w-full">
                          <div className="w-full text-base font-medium text-black suggested_blog_title">
                            {blog.title}
                          </div>
                          <a
                            href={"/blogs/view/" + blog.url}
                            className="w-full mx-auto text-sm font-medium text-right text-blue-600"
                          >
                            ...Read more
                          </a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-500">
                      No blogs found
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
