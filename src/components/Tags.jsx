import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blog from "../services/blog";

function Tags(props) {
  const [tag, setTag] = useState([]);

  const getData = async () => {
    try {
      const { data } = await blog.getTags();

      const arr = [];
      data.data.map((item) => {
        arr.push(...item.tags);
      });
      const tags = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
      }, []);

      setTag(tags);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-5 py-5  lg:px-40">
      <h1 className=" text-3xl font-semibold mb-4">Tags</h1>
      <div className=" flex justify-between items-center flex-wrap gap-5">
        {tag.length &&
          tag.map((tag) => (
            <Link
              key={tag}
              className=" block w-auto bg-spring px-7 py-1 rounded-lg"
              to={tag}
            >
              {tag}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Tags;
