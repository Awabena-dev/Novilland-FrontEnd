import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaArrowsUpToLine } from "react-icons/fa6";

export const Services = () => {
  return (
    <div>
        <div className="custom-container py-12">
            {/* title */}
            <div className='w-full flex justify-between flex-wrap px-6 mb-12'>
                <h1 className=' text-black text-3xl md:text-4xl lg:text-5xl font-semibold'>خدمات عقارية حديثة، لا مثيل لها</h1>
                <h2 className=' text-gray-700 font-medium text-[20px] md:text-2xl lg:text-[30px]'>فريقنا يقدم خدمات عقارية شاملة تجعلكم تستغنون عن أي وكالة أخرى</h2>
            </div>

            {/* card */}

            <div className='flex flex-col gap-y-3 gap-3 lg:gap-12 md:flex-row  flex-wrap md:items-center '>
                <div className='p-2 w-[330px]'>
                    {/* icon */}
                    <div className='w-[60px] h-[60px] flex items-center justify-center bg-slate-100'><FaShoppingCart className='w-8 h-8 fill-slate-400 text-slate-400'/></div>

                    <h3 className=' text-black font-medium text-[20px] md:text-2xl my-3'>البيع والشراء</h3>
                    <p className='text-gray-600 text-[16px] text-right text-wrap'>نقدم خدمة شاملة لبيع وشراء العقارات بأسعار تنافسية</p>
                </div>

                <div className='p-2 w-[330px]'>
                    {/* icon */}
                    <div className='w-[60px] h-[60px] flex items-center justify-center bg-slate-100'><IoIosHome className='w-8 h-8 fill-slate-400 text-slate-400'/></div>

                    <h3 className=' text-black font-medium text-[20px] md:text-2xl my-3'>التاجير العقاري</h3>
                    <p className='text-gray-600 text-[16px] text-right text-wrap'>نوفر خدمة سهلة وموثوقة لتأجير الشقق والفيلات والمكاتب التجارية</p>
                </div>

                <div className='p-2 w-[330px]'>
                    {/* icon */}
                    <div className='w-[60px] h-[60px] flex items-center justify-center bg-slate-100'><FaArrowsUpToLine className='w-8 h-8 fill-slate-400 text-slate-400'/></div>

                    <h3 className=' text-black font-medium text-[20px] md:text-2xl my-3'> أدارة الممتلكات</h3>
                    <p className='text-gray-600 text-[16px] text-right text-wrap '>نهتم بإدارة وصيانة العقارات لتحقيق أعلى قيمة استثمارية</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services