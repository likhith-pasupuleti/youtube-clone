import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <div className="flex shadow-lg">
      <div className="p-7 flex">
        <GiHamburgerMenu
          size={45}
          className="cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <IoLogoYoutube size={45} className="mx-16" />
      </div>
      <div className="flex items-center mx-auto border border-gray-300 my-5 rounded-full h-16">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-[50rem] mx-3 outline-none"
        />
        <div className="flex items-center border border-gray-300 rounded-r-full h-full w-24 bg-gray-100">
          <ImSearch size={45} className="p-2 focus:outline-none mx-auto" />
        </div>
      </div>
      <div>
        <FaUserCircle className="w-96 h-14 my-5" />
      </div>
    </div>
  );
};

export default Header;
