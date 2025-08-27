import React from 'react'
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const Team = () => {
    return (
        <div>
            <div className="custom-container">
                {/* title */}
                <div className='flex justify-between flex-wrap gap-y-4 mb-16'>
                    {/* text */}
                    <div>
                        <h1 className='text-black text-2xl md:text-3xl lg:text-4xl mb-2'>فريق من المختصين في خدمتكم</h1>
                        <h2 className=' text-gray-700 tetx-[20px] md:text-2xl lg:text-[30px]'>نهتم بإدارة وصيانة العقارات لتحقيق أعلى قيمة استثمارية</h2>
                    </div>

                    {/* image */}
                    <div className='flex gap-3 items-center'>
                        <div className='flex -space-x-4 items-center'>
                            <img src="/team/team-sm-1.png" className='w-12' alt="team" />
                            <img src="/team/team-sm-2.png" className='w-12' alt="team" />
                            <img src="/team/team-sm-3.png" className='w-12' alt="team" />
                        </div>

                        <div className=' flex flex-col gap-y-1.5'>
                            <h3 className='text-black tetx-[20px] md:text-3xl lg:text-[28px] flex gap-0.5'>فريقنا <HiOutlineArrowSmLeft /></h3>
                            <p>تعرف عليهم</p>
                        </div>
                    </div>
                </div>


                {/* main */}
                <div className='grid grid-col-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-3 '>
                    {/* cards */}
                    <div className='p-3 w-[300px] '>
                        {/* image */}
                        <div className='bg-white shadow-2xl pt-4 rounded-2xl'>
                            <img src="/team/team1.png" alt="" />
                        </div>

                        {/* text */}
                        <h4 className=' text-black my-4 text-[22px] md:text-2xl lg:text-[28px] font-medium'>محمد ياسين</h4>
                        <p className=' text-gray-600 text-[14px] md:[16px] lg:text[18px]'>مستشلر البيع والشراء</p>
                    </div>

                    <div className='p-3 w-[300px]'>
                        {/* image */}
                        <div className='bg-white shadow-2xl pt-4 rounded-2xl'>
                            <img src="/team/team2.png" alt="" />
                        </div>

                        {/* text */}
                        <h4 className=' text-black my-4 text-[22px] md:text-2xl lg:text-[28px] font-medium'> عبد الله كريم</h4>
                        <p className=' text-gray-600 text-[14px] md:[16px] lg:text[18px]'>خبير في التسير</p>
                    </div>

                    <div className='p-3 w-[300px]'>
                        {/* image */}
                        <div className='bg-white shadow-2xl pt-4 rounded-2xl'>
                            <img src="/team/team3.png" alt="" />
                        </div>

                        {/* text */}
                        <h4 className=' text-black my-4 text-[22px] md:text-2xl lg:text-[28px] font-medium'>أحمد حسن</h4>
                        <p className=' text-gray-600 text-[14px] md:[16px] lg:text[18px]'>خبير التسويق العقاري</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team