import Bulb from "../../public/assets/bulb.svg";
import Circle from "../../public/assets/comment.svg";
import Pencil from "../../public/assets/pencil.svg";
import Code from "../../public/assets/code.svg";
import Left from "../../public/assets/left.png";
import Ai from "../../public/assets/ai.png";
import Hero from "../../public/assets/hero.png";
import Image from "../../public/assets/image.svg";
import Audio from "../../public/assets/audio.svg";
import DropDown from "./DropDown";

const Artificium = () => {
  const fruits = [
    { name: 'UI wire frame', image:Left },
    { name: 'Brochure design', image: Left },
    { name: ' Social media', image: Left },
    { name: 'Brand guidelines', image: Left },
  ];
  return (
    <div className="absolute ml-[22%] top-44 w-[77%] overflow-y-auto max-h-[73%] bottom-20 ">
      <div className="w-full">
      <h1 className="text-white text-center text-2xl mb-3">Innovation Starter Pack</h1>
      <p className="text-gray-400 text-center">Kickstart your innovation with our comprehensive selection of predefined prompts</p>
      <ul className="flex justify-around mt-5">
        <li className=""><div className="ml-5 mb-3 w-14 h-14 p-4 gradient rounded-full border border-[#1A1D21]"><img src={Circle} alt="bulb" className=" w-full "/></div>
        <h2 className="text-white ">Creative Assets</h2>
        </li>
        <li className=""><div className="ml-5 mb-3 w-14 h-14 p-4 pt-5 gradient rounded-full border border-[#1A1D21]"><img src={Code} alt="circle" className=" w-full   "/></div>
        <h2 className="text-white ">Developer Tool</h2>
        </li>
        <li className=""><div className="ml-5 mb-3 w-14 h-14 p-4 gradient rounded-full border border-[#1A1D21]"><img src={Pencil} alt="pencil" className=" w-full  "/></div>
        <h2 className="text-white ">Content Creation</h2>
        </li>
        <li className=""><div className="ml-5 mb-3 w-14 h-14 p-4 gradient rounded-full pt-3 border border-[#1A1D21]"><img src={Bulb} alt="code" className=" w-full  "/></div>
        <h2 className="text-white ">Idea Generation</h2>
        </li>
      </ul>
      <ul className="flex justify-around mt-5">
        <li>
        {fruits.map((fruit, index) => (
          <li key={index} className="cursor-pointer flex justify-between w-[200px] p-3 items-center linear-gradient mb-2 border border-[#1A1D21] rounded-lg ">
            <h2 className="text-white">{fruit.name}</h2>
            <img src={fruit.image} alt={fruit.name} className="w-[15px] h-[15px]"/>
          </li>
        ))} 
        </li>
        <li>
        {fruits.map((fruit, index) => (
          <li key={index} className="cursor-pointer flex justify-between w-[200px] p-3 items-center linear-gradient mb-2 border border-[#1A1D21] rounded-lg ">
            <h2 className="text-white">{fruit.name}</h2>
            <img src={fruit.image} alt={fruit.name} className="w-[15px] h-[15px]"/>
          </li>
        ))} 
        </li>
        <li>
        {fruits.map((fruit, index) => (
          <li key={index} className="cursor-pointer flex justify-between w-[200px] p-3 items-center linear-gradient mb-2 border border-[#1A1D21] rounded-lg ">
            <h2 className="text-white">{fruit.name}</h2>
            <img src={fruit.image} alt={fruit.name} className="w-[15px] h-[15px]"/>
          </li>
        ))} 
        </li>
        <li>
        {fruits.map((fruit, index) => (
          <li key={index} className="cursor-pointer flex justify-between w-[200px] p-3 items-center linear-gradient mb-2 border border-[#1A1D21] rounded-lg ">
            <h2 className="text-white">{fruit.name}</h2>
            <img src={fruit.image} alt={fruit.name} className="w-[15px] h-[15px]"/>
          </li>
        ))} 
        </li>
      </ul>
      <ul className="flex px-2 py-3 w-[94%] border-[#1A1D21] border ml-[3%] mt-3 rounded-lg">
        <li>
          <img src={Hero} alt="avatar" />
        </li>
        <li className="pl-3">
          <li className="flex mt-6">
          <h1 className="text-white">Ryan Lee</h1>
          <span className="text-gray-700 text-sm pl-3">7 sec ago</span>
          </li>
          <h2 className="text-gray-500">Hi,can you help me with some ideas for the shows ?</h2>
        </li>
      </ul>
      <ul className="flex px-2 py-3 w-[94%] border-[#1A1D21] border ml-[3%] mt-3 rounded-lg">
        <li>
          <img src={Ai} alt="avatar" />
        </li>
        <li className="pl-3">
          <li className="flex mt-6">
          <h1 className="text-white">Artificium</h1>
          <span className="text-gray-700 text-sm pl-3">6 sec ago</span>
          </li>
          <h2 className="text-gray-500">Of course!What kind of ideas are looking for ?</h2>
          <li className="flex gap-5">
          <button className="bg-[#1A1D21] text-gray-400 px-2 py-1 rounded-lg mt-3">Regenerate response</button>
          <DropDown />
          </li>
        </li>
      </ul>
      <ul className="flex px-2 py-3 w-[94%] border-[#1A1D21] border ml-[3%] mt-3 rounded-lg">
        <li>
          <img src={Hero} alt="avatar" />
        </li>
        <li className="pl-3">
          <li className="flex mt-6">
          <h1 className="text-white">Ryan Lee</h1>
          <span className="text-gray-700 text-sm pl-3">2 sec ago</span>
          </li>
          <h2 className="text-gray-500">I,m not sure, maybe something related to spaceship?</h2>
        </li>
      </ul>
      <ul className="flex px-2 py-3 w-[94%] border-[#1A1D21] border ml-[3%] mt-3 rounded-lg">
        <li>
          <img src={Ai} alt="avatar" />
        </li>
        <li className="pl-3">
          <li className="flex mt-6">
          <h1 className="text-white">Artificium</h1>
          <span className="text-gray-700 text-sm pl-3">6 sec ago</span>
          </li>
          <h2 className="text-gray-500 mb-5">Okay,let's explore some options related to the spaceship.How are some things I can do for you:</h2>
          <li className="flex gap-5">
            <li className="gradient cursor-pointer border border-[#1A1D21] p-3 pr-10 rounded-lg w-[150px]">
              <img src={Image} alt="avatar" className="pb-4 w-5" />
              <h3 className="text-white">Image</h3>
              <h3 className="text-white">Generation</h3>
            </li>
            <li className="gradient cursor-pointer border border-[#1A1D21] p-3 pr-10 rounded-lg w-[150px]">
              <img src={Code} alt="avatar" className="pb-4 w-7"/>
              <h3 className="text-white">Code</h3>
              <h3 className="text-white">engineering</h3>
            </li>
            <li className="gradient cursor-pointer border border-[#1A1D21] p-3 pr-10 rounded-lg w-[150px]">
              <img src={Pencil} alt="avatar" className="pb-4 w-5"/>
              <h3 className="text-white">Content</h3>
              <h3 className="text-white">creation</h3>
            </li>
            <li className="gradient cursor-pointer border border-[#1A1D21] p-3 pr-10 rounded-lg w-[150px]">
              <img src={Bulb} alt="avatar" className="pb-4 w-5"/>
              <h3 className="text-white">Idea</h3>
              <h3 className="text-white">generation</h3>
            </li>
            <li className="gradient cursor-pointer border border-[#1A1D21] p-3 pr-10 rounded-lg w-[150px]">
              <img src={Audio} alt="avatar" className="pb-4 w-5"/>
              <h3 className="text-white">Audio/Video</h3>
              <h3 className="text-white">creation</h3>
            </li>
          </li>
          <li className="flex gap-5">
          <button className="bg-[#1A1D21] text-gray-400 px-2 py-1 rounded-lg mt-3">Regenerate response</button>
          <DropDown />
          </li>
        </li>
      </ul>
      <ul className="flex px-2 py-3 w-[94%] border-[#1A1D21] border ml-[3%] mt-3 rounded-lg">
        <li>
          <img src={Hero} alt="avatar" />
        </li>
        <li className="pl-3">
          <li className="flex mt-6">
          <h1 className="text-white">Ryan Lee</h1>
          <span className="text-gray-700 text-sm pl-3">7 sec ago</span>
          </li>
          <h2 className="text-gray-500">Hi,can you help me with some ideas for the shows ?</h2>
        </li>
      </ul>
      <ul className="flex px-2 py-3 w-[94%] border-[#1A1D21] border ml-[3%] mt-3 rounded-lg">
        <li>
          <img src={Ai} alt="avatar" />
        </li>
        <li className="pl-3">
          <li className="flex mt-6">
          <h1 className="text-white">Artificium</h1>
          <span className="text-gray-700 text-sm pl-3">6 sec ago</span>
          </li>
          <h2 className="text-gray-500">Of course!What kind of ideas are looking for ?</h2>
          <li className="flex gap-5">
          <button className="bg-[#1A1D21] text-gray-400 px-2 py-1 rounded-lg mt-3">Regenerate response</button>
          <DropDown />
          </li>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Artificium
