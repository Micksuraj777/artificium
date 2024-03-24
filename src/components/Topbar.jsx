import React, { useState, useEffect } from "react";
import User from "../../public/assets/user.png";
import Share from "../../public/assets/share.png";
import Edit from "../../public/assets/edit.png";
import File from "../../public/assets/file.png";
import Artificium from "../../public/assets/artificium.png";
import Comment from "../../public/assets/comment-circle.png";
import { useNavigate,useLocation } from "react-router-dom";
const Topbar = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location]);
  const navigate = useNavigate();
  const handleItemClick = (route) => {
    setSelectedItem(route);
    navigate(route);
  };
  const handleArtificiumClick = () => {
    navigate('/');
  };
  const handleChatClick = () => {
    navigate('/chat');
  };
  const handleLibraryClick = () => {
    navigate('/library');
  };
  return (
    <div className="w-[77%] h-[20%] bg-black ml-[22%] px-5 rounded-lg absolute top-2  pt-2 z-50">
    <ul className="w-full">
    <li className="flex justify-between">
      <h1 className='text-white text-2xl'>Orbital Oddysey</h1>
      <li className="flex items-center gap-4">
            <img src={User} className="w-[100px] h-[30px]" alt="user" />
            <li className="flex items-center gap-1">
            <img src={Share} className="w-[15px] h-[15px]" alt="share" />
            <h3 className="text-gray-700">Share</h3>
            </li>
            <li className="p-1 bg-[#1A1D21] border border-[#131620] rounded-md">
            <img src={Edit} alt="edit" />
            </li>
        </li>
        </li>
        <li><p className='text-gray-500 pb-5'>Marketing Campaign for a new TV series Launch</p></li>
      </ul>
      <ul className="flex items-center gap-10 border-t border-[#131620] pt-3">
        <li 
        className={` flex  gap-2 cursor-pointer  ${
          selectedItem === '/' ? 'border-b-4 border-[#B6F09C]' : ''
        }`}
        onClick={() => handleItemClick('/')}>
            <img src={Artificium} alt="art" />
            <h2 onClick={handleArtificiumClick} className="text-white">Artificium</h2>
        </li> 
        <li className={` flex  gap-2 cursor-pointer  ${
          selectedItem === '/chat' ? 'border-b-4 border-[#B6F09C]' : ''
        }`}
        onClick={() => handleItemClick('/chat')}>
            <img src={Comment} alt="share" />
            <h2 onClick={handleChatClick} className="text-white">Chat</h2>
        </li>
        <li className={` flex  gap-2 cursor-pointer  ${
          selectedItem === '/library' ? 'border-b-4 border-[#B6F09C]' : ''
        }`}
        onClick={() => handleItemClick('/library')}>
            <img src={File} alt="file" />
            <h2 onClick={handleLibraryClick} className="text-white">Library</h2>
        </li>
      </ul>
    </div>
  )
}

export default Topbar
