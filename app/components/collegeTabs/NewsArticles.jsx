import React, { useState } from "react";
import { Calendar } from "lucide-react";

const NewsArticles = ({ college }) => {
  const newsArticles = college?.newsArticles || [];

  // Extract unique categories and add "All" as the first tab
  const categories = [
    "All",
    ...new Set(newsArticles.map((article) => article.category)),
  ];

  const [activeTab, setActiveTab] = useState("All");

  // Filter articles based on active tab
  const filteredArticles =
    activeTab === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeTab);

  return (
    <>
      <div className="">
        <div className="text-2xl font-semibold text-tertiary border-b pb-2 mb-2">
          {college?.collegeName} News and Articles
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 pb-2 mb-4 overflow-x-auto">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-1 text-sm font-medium focus:outline-none transition-all duration-300
              ${
                activeTab === category
                  ? "bg-prim-light border-2 rounded-full border-prim"
                  : "text-gray-600 rounded-full hover:bg-gray-200 border-2 border-white"
              }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div
              key={article.id}
              className="border p-2 rounded-lg shadow-sm hover:shadow-md transition-all flex gap-2 justify-between"
            >
              <div className="w-1/4">
                <img
                  src={article.imageUrl}
                  alt="Article Image"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="w-3/4">
                <a
                  href={`/news/${article.title}`}
                  className="text-lg text-tertiary hover:text-second font-semibold mb-2 twoLinerTitle2"
                >
                  {article.title}
                </a>
                <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
                  <Calendar size={16} />
                  {article.date}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No articles available for this category.
          </p>
        )}
      </div>
    </>
  );
};

export default NewsArticles;
