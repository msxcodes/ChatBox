import React from "react";

function ProfileTab() {
  return (
    <div className="mb-0.5 flex flex-col gap-y-6 border-b bg-white py-2 sm:flex-row sm:items-center sm:justify-between hover:bg-slate-200 transition duration-500 cursor-pointer">
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full object-cover ml-2"
          src="gaurave.png"
          alt="png"
        />
        <div className="ml-4 w-full">
          <p className="text-slate-800 text-md font-bold">Gaurave Singh</p>
          <p className="text-slate-500 text-sm">hi developer </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileTab;
