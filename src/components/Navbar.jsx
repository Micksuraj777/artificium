import React, { useState, useEffect } from "react";
import Avatar from "../../public/assets/avatar.png";
import Arrow from "../../public/assets/arrow.png";
import Search from "../../public/assets/search.png";
import S from "../../public/assets/s.png";
import Folder from "../../public/assets/folder.png";
import Square from "../../public/assets/square.png";
import Redsquare from "../../public/assets/redsquare.png";
import Hexagon from "../../public/assets/hexagon.png";
import Add from "../../public/assets/add.png";
import Triangle from "../../public/assets/traiangle.png";
import Hero from "../../public/assets/hero.png";
import Cog from "../../public/assets/cog.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location]);

  const handleItemClick = (route) => {
    setSelectedItem(route);
    navigate(route);
  };

  return (
    <div className=" w-[20%] h-screen ml-2 pt-2">
      <div className="bg-black h-[99%] rounded-lg">
        <ul className="flex justify-between  items-center pt-3 px-6 border-[#131619] border-b">
          <ul className="flex gap-3 pb-6">
            <li>
              <img src={Avatar} alt="avatar" className="w-[50px] h-[50px]" />
            </li>
            <li className="cursor-pointer">
              <h1 className="text-white">Intellisys</h1>
              <h2 className="text-[#B6F09C]">12 members</h2>
            </li>
          </ul>
          <li>
            <img src={Arrow} alt="arrow" />
          </li>
        </ul>
        <h1 className="pl-6 text-gray-500 mb-5 mt-3">GENERAL</h1>
        <ul className="px-6 border-b border-[#131619]">
          <li className="flex justify-between items-center pb-5 cursor-pointer">
            <li className="flex item-center">
              <img src={Search} alt="search" className="w-[20px] h-[20px]" />
              <h2 className="text-white pl-6">Search</h2>
            </li>
            <span className="linear-gradient p-1 border border-[#131619] rounded-md">
              <img src={S} alt="s" className="w-[20px]" />
            </span>
          </li>
          <li className="flex gap-6 items-center pb-5 cursor-pointer">
            <img src={Folder} alt="folder" />
            <h2 className="text-white">Billing</h2>
          </li>
        </ul>
        <h1 className="pl-6 text-gray-500 mb-5 mt-3">PROJECTS</h1>
        <ul className="pb-5">
          <li
            className={`flex gap-3 mb-4 mx-4 items-center cursor-pointer  ${
              selectedItem === '/' ? 'linear-gradient p-2 rounded-md border border-[#131619]' : ''
            }`}
            onClick={() => handleItemClick('/')}
          >
            <img src={Square} alt="sq" className="w-[20px] h-[20px]" />
            <h2 className="text-white">Orbital Oddysey</h2>
          </li>
          <li
            className={`flex gap-3 mb-4 mx-4 items-center cursor-pointer ${
              selectedItem === '/digital' ? 'linear-gradient p-2 rounded-md border border-[#131619]' : ''
            }`}
            onClick={() => handleItemClick('/digital')}
          >
            <img src={Triangle} alt="tr" className="w-[20px] h-[20px]" />
            <h2 className="text-white">Digital Product Launch</h2>
          </li>
          <li
            className={`flex gap-3 mb-4 mx-4 items-center cursor-pointer ${
              selectedItem === '/brand' ? 'linear-gradient p-2 rounded-md border border-[#131619]' : ''
            }`}
            onClick={() => handleItemClick('/brand')}
          >
            <img src={Redsquare} alt="red" className="w-[20px] h-[20px]" />
            <h2 className="text-white">Brand Refresh</h2>
          </li>
          <li
            className={`flex gap-3 mb-4 mx-4 items-center cursor-pointer ${
              selectedItem === '/social' ? 'linear-gradient p-2 rounded-md border border-[#131619]' : ''
            }`}
            onClick={() => handleItemClick('/social')}
          >
            <img src={Hexagon} alt="hex" className="w-[20px] h-[20px]" />
            <h2 className="text-white">Social Media Strategy</h2>
          </li>
          <li className="flex gap-3 mb-4 px-6 items-center cursor-pointer">
            <img src={Add} alt="add" className="w-[20px] h-[20px]" />
            <h2 className="text-gray-500">Add new project</h2>
          </li>
        </ul>
        <ul className="p-3 flex mt-7 linear-gradient justify-between items-center rounded-2xl mx-3 border border-[#131619]">
          <li className="flex items-center">
            <img src={Hero} alt="hero" className="items-center" />
            <li>
              <h1 className="text-white">Ryan Lee</h1>
              <h2 className="text-[#B6F09C]">Premium</h2>
            </li>
          </li>
          <li>
            <img src={Cog} alt="cog" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
