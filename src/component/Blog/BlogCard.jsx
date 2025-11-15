import React from 'react'

const BlogCard = ({ it }) => {
  return (
    <div>
      <div className="container mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        
        <div className="relative h-60">
          <img 
            className="w-full h-full object-cover" 
            src={it.image} 
            alt={it.title}
          />
        </div>

        <div className="p-6 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            {it.category}
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 leading-tight mb-4">
            {it.title}
          </h2>

          <div className="flex justify-center items-center text-xs text-gray-400 space-x-2">
            <span>{it.date}</span>
            <span className="text-gray-300">•</span>
            <span>{it.views}</span>
            <span className="text-gray-300">•</span>
            <span>{it.readTime}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlogCard
