import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";

const Header = () => {
    return (
        <div className='h-[700px]'>
            <div className='custom-container bg-cover bg-center object-fill h-full pr-6 flex py-[70px]' style={{ backgroundImage: "url(/Home/Header-Background.png)" }}>
                <div className='mt-[7rem] md:mt-12 lg:mt-16'>
                    <h1 className='text-5xl font-extrabold '>عقارك المثالي علي بعد خطوه واحدة </h1>
                    <p className='text-[18px] text-gray-700 text-right my-12'>نحن نسعى لتوفير خدمة متميزة للعملاء وتسهيل عملية البحث عن المنازل
                        والشقق والفيلات والمكاتب التجارية.</p>

                    {/* search box */}
                    <div className='  gap-y-3 py-3 md:gap-12 items-center hidden sm:flex md:flex-row sm:flex-col px-2 md:px-6 w-full md:w-[650px] h-auto bg-white rounded-2xl'>
                        <FaSearch className=' w-8 h-8 fill-white p-2 rounded-2xl bg-black' />

                        <div className=' flex gap-4 items-center'>
                            {/*  */}
                            <div className='flex gap-1.5'>
                                <FaLocationDot className='w-8 h-8 fill-gray-700 p-3 rounded-full bg-slate-100' />
                                <div className='flex flex-col gap-y-1'>
                                    <h5 className=' text-[14px] text-black'>حسب المكان</h5>
                                    <p className='text-[12px] text-gray-600'>الرياض</p>
                                </div>
                            </div>

                            <div className='flex gap-1.5'>
                                <FaLocationDot className='w-8 h-8 fill-gray-700 p-3 rounded-full bg-slate-100' />
                                <div className='flex flex-col gap-y-1'>
                                    <h5 className=' text-[14px] text-black'> التكلفة</h5>
                                    <p className='text-[12px] text-gray-600'>200$</p>
                                </div>
                            </div>

                            <div className='flex gap-1.5'>
                                <FaLocationDot className='w-8 h-8 fill-gray-700 py-3 rounded-full bg-slate-100' />
                                <div className='flex flex-col gap-y-1'>
                                    <h5 className=' text-[14px] text-black'> المدة</h5>
                                    <p className='text-[12px] text-gray-600'>30 يوم</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header