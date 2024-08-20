'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { CircleUserRound, User } from 'lucide-react'
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
export default function Page({ params }) {
    const [blogInfo, setBlogInfo] = useState([]);

    const title = decodeURIComponent(params.title);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/blogs?title=' + title);
            const result = await res.json();
            if (result.success) {
                setBlogInfo(result.data);
            }
        };

        fetchData();
    }, [title]);


    function formatDate(dateString) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }
    return (
        <>
            {/* <h1>{blogInfo?.title}</h1>
            <p>{blogInfo?.content}</p>
            <img src={blogInfo?.image} alt={blogInfo?.title} />
            <p>Posted by {blogInfo?.author}</p>
            <p>Posted on {formatDate( blogInfo?.createdAt)}</p>
            <button onClick={() => router.push('/blogs')}>Back to Blogs</button> 
            <div className='text-lg' dangerouslySetInnerHTML={{ __html: blogInfo.content }} />*/}
            <Navbar />

            <div className="container lg:px-32 py-5">
                <div className="flex justify-center w-full p-3">
                    <img src={blogInfo?.cardImage} loading="lazy" alt="Card image" className="mt-5 rounded w-[100%]" />
                </div>

                <div className="flex-row justify-center">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold mb-3 text-center">{blogInfo?.title}</h1>
                        {/* <p className="text-sm text-gray-500">{blogInfo?.author}</p> */}
                        <div className="flex justify-center items-center">
                            <p className="text-sm text-gray-500 flex items-center"><User size={16} /> Published by  {blogInfo?.author ? blogInfo?.author : "N/A"}</p>
                            <span className="px-2 text-slate-400">|</span>
                            <p className="text-sm text-gray-500">{formatDate(blogInfo?.createdAt)}</p>
                        </div>

                        <hr class="h-px my-8 dark:bg-gray-700" />

                        <div className='text-lg blog_content' style={{ all: 'initial' }}
                            dangerouslySetInnerHTML={{ __html: blogInfo?.content }} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )


}