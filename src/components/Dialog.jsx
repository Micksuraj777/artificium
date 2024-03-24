import React, { useState } from 'react';
import User from '../../public/assets/user.png';

const ShareS = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModalToggle = () => {
    setModalVisible(!isModalVisible);
  };

  const handleShare = (platform) => {
    switch (platform) {
      case 'facebook':
        shareLink('https://www.facebook.com/');
        break;
      case 'twitter':
        shareLink('https://twitter.com/');
        break;
      // Add more cases for other social media platforms
      default:
        break;
    }
  };

  const shareLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Modal toggle */}
        <img
        onClick={handleModalToggle}
        type="button"
        title="Toggle modal"
        src={User} className="w-[100px] h-[30px] cursor-pointer" alt="Share Icon" />
      {/* Main modal */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md">
            {/* Modal content */}
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-900">Share Your Project</h3>
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
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => handleShare('facebook')} className="text-blue-600 hover:underline">Share on Facebook</button>
              <button onClick={() => handleShare('twitter')} className="text-blue-400 hover:underline">Share on Twitter</button>
              {/* Add more buttons for other social media platforms */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareS;
