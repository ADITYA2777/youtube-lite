import React, { useContext, useState } from "react";
import { context } from "../context/contextApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoChatFill } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import ytLogo from "../image/yt-logo.png";
import ytLogMobile from "../image/yt-logo-mobile.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu,setMobileMenu } = useContext(context);

  const navigate = useNavigate();

  const searchHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);

      setSearchQuery("")
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  console.log("moblieMenu:", mobileMenu); // Debug

  return (
    <div
      className="sticky top-0 z-10 flex flex-row items-cente justify-between
       h-14 px-4 md:px-5 bg-black dark:bg-black"
    >
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center
                   justify-center h-10 w-10 mt-9 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <SlMenu className="text-white text-xl" />
            ) : (
              <CgClose className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className=" flex h-5 items-center mt-9">
          <img
            className="h-full hidden  md:block "
            src={ytLogo}
            alt="Youtube"
          />
          <img className="h-full md:hidden " src={ytLogMobile} alt="Youtube" />
        </Link>
      </div>
      {/* serach input */}
      <div className="group flex items-center">
        <div
          className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl 
                 group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 "
        >
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 
           pl-5 md:pl-0 w-44  md:group-focus-within:pl-0  md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8  md:h-10 flex items-center
     justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]
            "
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex ">
          <div className="flex items-center justify-center h-10  w-10 rounded-full hover:bg-[#303030]/[0.6] ">
            <RiVideoChatFill className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center h-10 ml-2 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 hover:bg-[#303030]/[0.6]">
          <img src="https://api.multiavatar.com/stefan.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
