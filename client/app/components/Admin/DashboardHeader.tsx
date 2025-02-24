/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";
import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher";
import React, { FC, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

type Props = {
  open: boolean;
  setOpen?:any;
};

const DashboardHeader: FC<Props> = ({open,setOpen}) => {
  return (
    <div className="w-full flex items-center justify-end p-6 fixed top-5 right-0">
      <ThemeSwitcher />
      <div
        className="relative cursor-pointer m-2"
        onClick={() => setOpen(!open)}
      >
        <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black" />
        <span className="absolute -top-2 right-2 bg-[#3ccba0] rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
          3
        </span>
      </div>
      {open && (
        <div className="w-[350px] h-[50vh] dark:bg-[#111C43] bg-white shadow-xl absolute top-16 z-10 rounded">
          <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white p-3">
            Notifications
          </h5>
          <div className="dark:bg-[#2d3a4ea1] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]">
            <div className="w-full flex items-center justify-between p-2">
              <p className="text-black dark:text-white">
                New Question Received
              </p>
              <p className="text-black dark:text-white cursor-pointer">
                Mark as read
              </p>
            </div>
            <p className="px-2 text-black dark:text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              aut, inventore doloribus, iste facilis unde quas tenetur aliquam
              eveniet amet provident. Doloribus facere quos pariatur, unde illo
              numquam quam voluptatum?
            </p>
            <p className="p-2 text-black dark:text-white text-[14px]">
              5 days ago
            </p>
          </div>
          <div className="dark:bg-[#2d3a4ea1] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]">
            <div className="w-full flex items-center justify-between p-2">
              <p className="text-black dark:text-white">
                New Question Received
              </p>
              <p className="text-black dark:text-white cursor-pointer">
                Mark as read
              </p>
            </div>
            <p className="px-2 text-black dark:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              repellendus, deleniti veniam repudiandae rerum nulla reiciendis
              iste. Enim dolorum voluptatum, delectus et officiis iusto at nobis
              ducimus quisquam quaerat quasi.
            </p>
            <p className="p-2 text-black dark:text-white text-[14px]">
              5 days ago
            </p>
          </div>
          <div className="dark:bg-[#2d3a4ea1] bg-[#00000013] font-Poppins border-b dark:border-b-[#0000000f]">
            <div className="w-full flex items-center justify-between p-2">
              <p className="text-black dark:text-white">
                New Question Received
              </p>
              <p className="text-black dark:text-white cursor-auto">
                Mark as read
              </p>
            </div>
            <p className="px-2 text-black dark:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur laborum eaque explicabo officia placeat, saepe
              deleniti a porro fugit quam dolor voluptate tenetur fugiat
              quisquam praesentium sed omnis in delectus?
            </p>
            <p className="p-2 text-black dark:text-white text-[14px]">
              5 days ago
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default DashboardHeader;