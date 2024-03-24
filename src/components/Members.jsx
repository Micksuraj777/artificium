import React, { useState } from 'react';
import person from '../../public/assets/person.png';
import person1 from '../../public/assets/person1.png';
import person2 from '../../public/assets/person2.png';
import Arrow from '../../public/assets/arrow.png';
function Members() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overflow-y-auto h-[70%] absolute overflow-x-hidden">
      <li
        onClick={toggleDropdown}
        className='flex items-center gap-[60px]'>
        <h2 className="text-[#B6F09C]">12 members</h2>
        <img src={Arrow} alt="arrow" className='w-[15px] h-[10px]' />
      </li>
      {isOpen && (
        <ul className="absolute  left-0 bg-blur rounded-lg mt-1 shadow-lg w-[200px]">
          {[...Array(12)].map((_, index) => (
          <li key={index} className="flex px-4 py-2 gap-3 items-center hover:bg-gray-700 text-white">
            <img src={index % 3 === 0 ? person : index % 3 === 1 ? person1 : person2} alt={`person${index}`} />
            <h3 className="text-white">Person {index + 1}</h3>
          </li>
        ))}
        </ul>
      )}
    </div>
  );
}

export default Members;
