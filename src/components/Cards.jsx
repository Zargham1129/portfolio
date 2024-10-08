import React from "react";
import One from "../Assets/one.png";
import Two from "../Assets/two.png";
import Three from "../Assets/three.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
            <img className w-20 mx-auto mt-3rem bg-white src={One} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-4xl font-bold text-center">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8"> 500GB Storage</p>
              <p className="py-2 border-b mx-8"> One Granted User</p>
              <p className="py-2 border-b mx-8"> Send upto 2 GB</p>  
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium px-6 my-6 mx-auto py-3 text-black   ">Start Trail</button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
          <img className w-20 mx-auto mt-3rem bg-transparent src={Two} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 500GB Storage</p>
            <p className="py-2 border-b mx-8"> One Granted User</p>
            <p className="py-2 border-b mx-8"> Send upto 2 GB</p>  
          </div>
          <button className="bg-black text-[#00fd9a] w-[200px] rounded-md font-medium px-6 my-6 mx-auto py-3 text-black   ">Start Trail</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img className w-20 mx-auto mt-3rem bg-white src={Three} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 500GB Storage</p>
            <p className="py-2 border-b mx-8"> One Granted User</p>
            <p className="py-2 border-b mx-8"> Send upto 2 GB</p>  
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium px-6 my-6 mx-auto py-3 text-black   ">Start Trail</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
