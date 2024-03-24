import React, { useState } from 'react';
import Arrow from '../../public/assets/arrow.png';
import Export from '../../public/assets/export.svg';
import Create from '../../public/assets/create.svg';
import Adjust from '../../public/assets/adjust.svg';
import Pin from '../../public/assets/pin.svg';
function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-[#1A1D21] text-gray-400 px-2 py-1 rounded-lg mt-3 flex items-center gap-2">
        Modify
          <img src={Arrow} alt="arrow" />
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 bg-black  rounded-lg mt-1 shadow-lg w-[200px]">
          <li className="flex px-4 py-2 gap-3 hover:bg-gray-100 text-white ">
            <img src={Create} alt="export" />
            <h3 className="text-white hover:text-black">Create variantion</h3>
          </li>
          <li className="flex px-4 py-2 gap-3 hover:bg-gray-100 text-white">
            <img src={Adjust} alt="adjust" />
            <h3 className="text-white hover:text-black">Adjust</h3>
          </li>
          <li className="flex px-4 py-2 gap-3 hover:bg-gray-100 text-white">
            <img src={Pin} alt="export" />
            <h3 className="text-white hover:text-black">Share</h3>
          </li>
          <li className="flex px-4 py-2 gap-3 hover:bg-gray-100 text-white">
            <img src={Export} alt="export" />
            <h3 className="text-white hover:text-black">Export</h3>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropDown;
