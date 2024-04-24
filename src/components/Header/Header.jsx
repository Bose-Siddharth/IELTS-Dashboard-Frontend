import React from "react";
import ProfilePhoto from "../../assets/Images/ProfilePic.jpg";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import './Header.css'

export default function Header({Heading,isOpen}) {
  return (
    <>

      <header className={`flex justify-between pt-8 ${isOpen?'pl-':'pl-12'} md:flex-row flex-col gap-5 pb-3 pr-5`}>
        <h1 className="font-semibold text-3xl">{Heading}</h1>
        <form className="search">
          <input
            className="drop-shadow align-middle  h-[50px] rounded-3xl pl-3.5 outline-none w-[100%] md:w-80"
            type="text"
            placeholder="Search for anything..."
          />
        </form>
        <div className={`prof flex drop-shadow bg-[white] border rounded-full align-middle justify-center pt-2 pl-1 w-[100%]  lg:w-[15%]`} 
        style={{
          display:"flex",
          justifyContent:'space-between',
        }}

    >
          <div className="object-cover border rounded-full mb-1 ml-1 mr-3">
          <div className="h-12 w-12 flex my-auto">
            <img
                src={ProfilePhoto}
                // className="w-12 h-12 rounded-full"
                className="object-contain rounded-full mx-auto"
                alt="Profile Photo"
              />
          </div>
            
          </div>
          <div className="header__user-profile-info">
            <p className="font-medium	">Alex meian</p>
            <p className="font-normal text-sm opacity-60">Admin</p>
            <div className="header__user-profile-info-spinner">
              <div className="header__user-profile-info-spinner-circle"></div>
              <div className="header__user-profile-info-spinner-circle"></div>
              <div className="header__user-profile-info-spinner-circle"></div>
            </div>
            <p className="header__user-profile-info-status">
              {/* <span className="header__user-profile-info-status-online">Online</span> */}
            </p>
          </div>
          <div>
            <div className="p-3 cursor-pointer">
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
