import React from 'react'
import img from '../../assets/About/yy.png'

const Performance = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-5 flex flex-col md:flex-row items-center gap-12">

      {/* Image Section */}
      <div className="md:w-1/2">
        <img 
          src={img} 
          alt="Performance" 
          className="w-full rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        
        <p className="text-green-600 font-semibold tracking-wide uppercase">
          Our Performance
        </p>

        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Your Partner for  
          <span className="block">e-commerce grocery</span>
          <span className="block">solutions</span>
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
          veritatis et quasi architecto.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
        </p>
      </div>
    </div>
  )
}

export default Performance
