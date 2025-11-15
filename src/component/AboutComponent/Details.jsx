import React from 'react'

const Details = () => {
  const items = [
    {
      title: "Who We Are",
      desc: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Tellus eros donec ac odio orci ultrices in."
    },
    {
      title: "Our History",
      desc: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Tellus eros donec ac odio orci ultrices in."
    },
    {
      title: "Our Mission",
      desc: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Tellus eros donec ac odio orci ultrices in."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-5">
      <div className="grid md:grid-cols-3 gap-10">

        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              {item.title}
            </h1>

            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Details
