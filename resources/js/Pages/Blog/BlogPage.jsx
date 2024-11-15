import React from "react";
import Navbar from "@/CustomComponents/Navbar";

import { exampleBlogData, tagColors } from "@/Constants/StaticData";

const BlogPageCard = ({ title, date, readTime, tags, image }) => {
    return (
        <div className="flex-col-2 cursor-pointer">
            <img src={image} className="w-full rounded-t-lg" alt={title} />
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${tagColors[tag] || "bg-gray-500 text-gray-100"}`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <h1 className="text-white text-xl font-bold">{title}</h1>
            <p>място за описание</p>
            <div className="flex-2 text-sm">
                <p>{date}</p>
                <p>·</p>
                <p>{readTime}</p>
            </div>
        </div>
    );
};

const BlogPage = () => {
    return (
        <div>
            <Navbar />
            <div className="flex-col-10 py-28 max-w-wrapper">
                <h1 className="text-4xl font-bold text-center">Блог</h1>
                <div className="grid-3 gap-10">
                    {exampleBlogData.map((card, idx) => (
                        <BlogPageCard {...card} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
