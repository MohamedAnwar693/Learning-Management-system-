/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import Heading from "@/app/utils/Heading";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import CourseAnalytics from "../../components/Admin/Analytics/CourseAnalytics";


type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Elearning - Admin"
          description="Elearning is a platform for students to learn and get help from teachers"
          keywords="Programing,MERN,Redux,Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <CourseAnalytics/>
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;

