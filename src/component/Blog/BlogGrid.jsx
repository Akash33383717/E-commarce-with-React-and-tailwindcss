import React, { useEffect, useState } from 'react'
import BlogCard from '../Blog/BlogCard.jsx'

const BlogGrid = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then(res => res.json())
      .then(json => setBlog(json));
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 container mx-auto gap-5 md:gap-10 my-15 md:grid-cols-3 lg:grid-cols-4'>
      {blog.map((item) => (
        <BlogCard key={item.id} it={item} />
      ))}
    </div>
  );
};

export default BlogGrid;

