import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="bg-trello-blue font-nunito h-screen">
      {/* Hero */}
      <div className="container">
        <div className="flex items-start text-white">
          <div className="w-1/2 pt-8">
            <h1 className="font-bold text-4xl">
              Trello helps teams work more collaboratively and get more done.
            </h1>
            <p className="text-xl pt-2">
              Trello’s boards, lists, and cards enable teams to organize and
              prioritize projects in a fun, flexible, and rewarding way.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
              alt="hero-image"
            />
          </div>
        </div>
        {/* email details */}
        <div className="">
          <div className="flex justify-center pt-8 pb-16 w-1/2">
            <div className="w-2/3">
              <input
                className="px-3 py-2 w-full text-lg placeholder-gray-600 rounded focus:outline-none"
                type="text"
                name=""
                placeholder="Email"
              />
            </div>
            <div className="w-1/3 ml-3">
              <button className="focus:outline-none btn font-bold text-lg rounded shadow ">
                Sign up. Its free!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
