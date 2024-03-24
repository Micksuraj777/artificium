import Picker from "../../public/assets/picker.png"
import Plane from "../../public/assets/paper-plane.png";
import Microphone from "../../public/assets/microphone.png";

const Chatbar = () => {
  
  return (
    <div className="w-[77%] h-[10%] bg-black ml-[22%] absolute bottom-3 rounded-lg z-50">
      <div className="w-full items-center">
        <ul className="flex justify-between p-6 pt-[17px]">
            <li className="flex items-center">
                <img src={Microphone} alt="microphone" />
                <input type="text" placeholder="You can make ask anything! I am here to help you" className="w-[500px] outline-none text-white bg-black p-1 px-2 rounded-md"/>
            </li>
            <li className="flex items-center gap-5">
            <label htmlFor="filePicker">
                <img src={Picker} alt="picker" />
            </label>
            <input type="file" id="filePicker" style={{ display: "none" }} />
                <img src={Plane} alt="plane" className="p-1 bg-[#1A1D21] border border-[#131620] rounded-md" />
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Chatbar
