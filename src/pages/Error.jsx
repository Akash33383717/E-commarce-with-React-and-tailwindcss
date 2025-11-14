// Error.jsx
import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom' // <-- Import these hooks

const Error = () => {
  const error = useRouteError(); // <-- Get the error object

  let title = "An Unexpected Error Occurred";
  let message = "Something went wrong on our end. Please try again later.";

  // Check if it's an HTTP error response (like 404, 500, etc.)
  if (isRouteErrorResponse(error)) {
    title = `${error.status} | ${error.statusText}`; // e.g., "404 | Not Found"
    message = error.data || "The page you are looking for does not exist or has been moved.";
  } else if (error instanceof Error) {
    // If it's a standard JavaScript error
    message = error.message;
  } 

  return (
    <div className='h-screen container mx-auto justify-center flex flex-col items-center mt-20'>
      <h1 className="text-4xl font-bold text-red-600">{title}</h1>
      <p className="text-xl mt-4">{message}</p>
      <p className="mt-8 text-blue-500 hover:underline">
        <a href="/">Go to the Home Page</a>
      </p>
    </div>
  )
}

export default Error
