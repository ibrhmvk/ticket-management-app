import React from "react";
import {UnAssigned,Assigned, Mentions, Closed, Folders, Tags, Spam, Starred, Compose} from "../Assets/Assets"

function MailBox() {
  return (
    <div className="mt-4 ml-4 shadow-xl w-[218px] h-[805px] bg-white	">
      <div>
        <h2 className="px-8 py-3 text-base font-medium">Mailbox</h2>
      </div>
      <div className="flex justify-start items-center px-8 py-3">
        <UnAssigned />
        <h3 className="ml-3 text-sm ">Unassigned (21)</h3>
      </div>
      <div className="flex justify-start items-center px-8 py-3  bg-[#E1F5FE]">
        <Assigned/>
        <h3 className="ml-3 text-sm text-[#4ca9f4]">Assigned</h3>
      </div>
      <div>
        <h4 className="px-8 py-3 ml-10 text-sm text-[#757575]">Mine</h4>
        <h4 className="px-8 py-3 ml-10 text-sm text-[#757575]">Team</h4>
      </div>
      <div className="flex justify-start ml- items-center px-8 py-3">
        <Mentions/>
        <h3 className="ml-3 text-sm">My mentions</h3>
      </div>
      <div className="flex justify-start ml- items-center px-8 py-3">
        <Closed/>
        <h3 className="ml-3 text-sm">Closed</h3>
      </div>
      <div className="flex justify-start ml- items-center px-8 py-3">
        <Folders/>
        <h3 className="ml-3 text-sm">Folders</h3>
      </div>
      <div>
        <h4 className="px-8 py-3 ml-10 text-sm text-[#757575]">Logistics</h4>
        <h4 className="px-8 py-3 ml-10 text-sm text-[#757575]">B2C</h4>
        <h4 className="px-8 py-3 ml-10 text-sm text-[#757575]">B2B</h4>
      </div>
      <div className="flex justify-start ml- items-center px-8 py-3">
        <Tags/>
        <h3 className="ml-3 text-sm">Tags</h3>
      </div>
      <div>
        <h4 className="px-8 py-3 ml-10 text-sm text-[#757575]">Essential</h4>
        <h4 className="px-8 py-3 ml-10 text-sm text-[#757575]">South India</h4>
      </div>
      <div className="flex justify-start ml- items-center px-8 py-3">
        <Spam/>
        <h3 className="ml-3 text-sm">Spam</h3>
      </div>
      <div className="flex justify-start ml- items-center px-8 py-3">
        <Starred/>
        <h3 className="ml-3 text-sm">Starred</h3>
      </div>
      <div className="flex justify-start ml- items-center px-8 py-3">
        <Compose/>
        <h3 className="ml-3 text-sm">Compose</h3>
      </div>
    </div>
  );
}

export default MailBox;
