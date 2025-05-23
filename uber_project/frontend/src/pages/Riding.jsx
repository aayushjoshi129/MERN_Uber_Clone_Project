import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full top-2 right-2">
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link >

      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium ">Aayush</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">ABC AB 1091</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center flex-col">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-1">
              <i className="text-lg ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/19 - 11/A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Talab Park, Near Talab Park, Bhopal, Madhya Pradesh 462001
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="text-lg ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹193</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
