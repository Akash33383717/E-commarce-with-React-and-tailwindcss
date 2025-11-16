import React, { useEffect, useState } from 'react';
import BlogCard from '../Blog/BlogCard.jsx';
import img from '../../assets/Blog/Vector.png';

const BlogGrid = () => {
  const [blog, setBlog] = useState([]);
  const [visibleCount, setVisibleCount] = useState(50);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch("/blog.json")
      .then(res => res.json())
      .then(json => setBlog(json));
  }, []);

  const handleChange = (e) => setVisibleCount(Number(e.target.value));
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  const categories = ['All', ...Array.from(new Set(blog.map(item => item.category)))];

  const filteredBlogs = selectedCategory === 'All'
    ? blog
    : blog.filter(item => item.category === selectedCategory);

  return (
    <div className='container mx-auto my-15'>
      {/* Dropdowns */}
      <div className='flex justify-between my-5 items-center'>
        <div className='flex gap-5 items-center'>
          <img src={img} alt="" />
          <h1 className='text-2xl'>Recipes Articles</h1>
        </div>
        <div className='flex gap-4'>
          {/* Show items */}
          <div>
            <label htmlFor="showCount" className='mr-2 font-medium'>Show items:</label>
            <select
              id="showCount"
              value={visibleCount}
              onChange={handleChange}
              className='border border-gray-300 rounded px-2 py-1 text-gray-400 hover:text-gray-800'
            >
              {Array.from({ length: blog.length }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Category filter */}
          <div>
            <label htmlFor="category" className='mr-2 font-medium'>Category:</label>
            <select
              id='category'
              value={selectedCategory}
              onChange={handleCategoryChange}
              className='border border-gray-300 text-gray-300 hover:text-neutral rounded px-2 py-1'
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Blog grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10'>
        {filteredBlogs.slice(0, visibleCount).map((item) => (
          <BlogCard key={item.id} it={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
