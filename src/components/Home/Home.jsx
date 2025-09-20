import React from "react";
import man from '../../assets/man.png'

const Home = () => {
  return (
   <div className="md:flex justify-between items-center p-3 lg:p-35 ">
      <div className="space-y-3 md:space-y-16">
        <p className="text-primary">Sale up to 70% off</p>
        <div>
          <h3 className="text-2xl md:text-5xl mb-2 font-semibold">New Collection For Fall</h3>
          <p>Discover all the new arrivals of ready-to-wear collection.</p>
        </div>
        <button className="btn btn-primary px-5 py-4 mb-5 md:mb-0">Shop Now</button>
      </div>
      <div className="bg-secondary rounded-lg">
        <img className="ms-5 mb-5 -mt-5 -mr-5" src={man} alt="" />
      </div>

   </div>
  );
};

export default Home;
