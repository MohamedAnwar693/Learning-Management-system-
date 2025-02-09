/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from '../../../app/utils/Heading';
import DashboardHero from "../../../app/components/Admin/DashboardHero";
import AdminProtected from '@/app/hooks/adminProtected';
import EditFaq from "../../components/Admin/Customization/EditFaq";


type Props = {}

const page = ({params}:any) => {
    const id = params?.id;
  return (
    <div>
        <AdminProtected>
            <Heading
                title="Elearning - Admin"
                description='Elearning is a platform for students to  learn and get help from teachers'
                keywords='Prograaming,MERN,Redux,Machine Learning'
            />
            <div className='flex h-screen'>
                <div className='1500px:w-[16%] w-1/5'>
                    <AdminSidebar/>
                </div>
                <div className='w-[85%]'>
                    <DashboardHero/>
                    <EditFaq />
                </div>
            </div>
        </AdminProtected>
    </div>
  )
}

export default page