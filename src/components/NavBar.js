import React from "react";

import { App, BindoLabs, Logo, Notification, Profile, Search, Setting } from "../Assets/Assets"

function NavBar() {
  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white	">
      <div className="flex justify-between items-center">
        <div>
          <Logo/>
        </div>
        <div className="ml-3">
          <BindoLabs/>
        </div>
        <div className="relative flex items-center">
          <div className="absolute ml-8"><Search /></div>
          
          <input
            className="ml-5 p-2 pr-3 pl-10 bg-[#FAFAFA] w-[563px] rounded"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="ml-6">
          <App />
        </div>
        <div className="ml-6">
          <Setting />
        </div>
        <div className="ml-6">
          <Notification />
        </div>
        <div className="ml-6">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
