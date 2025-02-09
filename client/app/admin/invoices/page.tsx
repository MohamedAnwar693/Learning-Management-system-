/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import AdminProtected from '@/app/hooks/adminProtected';
import Heading from '../../../app/utils/Heading';
import DashboardHeader from '@/app/components/Admin/DashboardHeader';
import AllInvoices from '@/app/components/Admin/Order/AllInvoices';


type Props = {}

const page = (props:Props) => {
  return (
    <div>
        <AdminProtected>
            <Heading
                title="Elearning - Admin"
                description='Elearning is a platform for students to  learn and get help from teachers'
                keywords='Prograaming,MERN,Redux,Machine Learning'
            />
            <div className='flex'>
                <div className='1500px:w-[16%] w-1/5'>
                    <AdminSidebar/>
                </div>
                <div className='w-[85%]'>
                    <DashboardHeader open={false}/>
                    <AllInvoices />
                </div>
            </div>
        </AdminProtected>
    </div>
  )
}

export default page