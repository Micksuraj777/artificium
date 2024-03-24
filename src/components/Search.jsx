import React, { useState } from 'react';
import SearchIcon from '../../public/assets/search.png';
import Facebook from '../../public/assets/facebook.jpg';
import Twitter from "../../public/assets/twitter.jpg";
import Snapchat from "../../public/assets/snapchat.jpg";
import Whatsapp from "../../public/assets/whatsapp.jpg";
import Instagram from "../../public/assets/instagram.jpg";
import Copy from "../../public/assets/copy.png";

const socialMediaPlatforms = [
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/' },
  { name: 'Twitter', icon: Twitter, url: 'https://www.twitter.com/' },
  { name: 'Snapchat', icon: Snapchat, url: 'https://www.snapchat.com/' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/' },
  { name: 'Whatsapp', icon: Whatsapp, url: 'https://www.whatsapp.com/' }
  // Add more platforms as needed
];

const Search = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModalToggle = () => {
    setModalVisible(!isModalVisible);
  };

  const handleShare = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Modal toggle */}
      <li
        onClick={handleModalToggle}
        className="cursor-pointer flex items-center gap-6"
        type="button"
        title="Toggle modal"
      >
        <img src={SearchIcon} className="w-[20px] h-[20px]" alt="Share Icon" />
        <h3 className="text-white">Search</h3>
      </li>

      {/* Main modal */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black rounded-lg p-6 max-w-md">
            {/* Modal content */}
            <div className="flex items-center justify-between pb-4">
              <h3 className="text-xl font-semibold text-gray-400 cursor-pointer">Share Your Project</h3>
              <button
                onClick={handleModalToggle}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.707 16.707a1 1 0 0 1-1.414-1.414L8.586 10 2.293 3.707A1 1 0 1 1 3.707 2.293L10 8.586l6.293-6.293a1 1 0 1 1 1.414 1.414L11.414 10l6.293 6.293a1 1 0 0 1-1.414 1.414L10 11.414l-6.293 6.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <div className="flex mt-4 gap-5">
              {socialMediaPlatforms.map(platform => (
                <button key={platform.name} onClick={() => handleShare(platform.url)} className="w-10">
                  <img src={platform.icon} alt={platform.name} />
                </button>
              ))}
            </div>
            <div className='flex mt-4 gap-6 p-3 justify-center items-center border-dashed border-2 border-[#131619] rounded-lg cursor-copy'>
              <img src={Copy} alt="copy" />
              <h3 className='text-white'>Copy link</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
