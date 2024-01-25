import React from "react";
import ProfileTab from "./ProfileTab";

function SideBar() {
  return (
    <div className="w-1/4  h-full">
      <div className="w-full flex ">
        <button className="w-2/4 flex text-sm items-center justify-center space-x-2 bg-white border-b-2 border-blue-500 py-1 text-black duration-300 font-semibold transition hover:bg-blue-500 hover:text-white">
          <span> Personal </span>
        </button>
        <button className="w-2/4 flex text-sm items-center justify-center space-x-2 bg-white border-b-2 border-blue-500 py-1 text-black font-semibold transition duration-300 hover:bg-blue-500 hover:text-white">
          <span> Groups </span>
        </button>
      </div>

      <div className="w-full pTab overflow-y-scroll">
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
        <ProfileTab/>
      </div>
    </div>
  );
}

export default SideBar;
