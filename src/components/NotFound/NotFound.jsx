import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-[#1C2B35] min-h-screen flex flex-col items-center justify-center text-white px-6 text-center">
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="404 Not Found"
        className="w-full max-w-md rounded-lg mb-6"
      />

      <h1 className="text-4xl md:text-6xl font-bold text-[#FF9900] mb-4">
        404 - Page Not Found
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Oops! The page you’re looking for doesn’t seem to exist.
      </p>

      <Link
        to="/"
        className="bg-[#FF9900] text-[#1C2B35] px-6 py-3 rounded-md font-semibold hover:bg-orange-500 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
