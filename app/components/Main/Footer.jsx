import React from 'react'

const Footer = () => {
    return (
        <div className='w-full py-12 bg-black'>
            <div className="custom-container">
                {/* contwent */}
                <div className='flex flex-col items-center'>
                    {/* logo */}
                    <img src="/Logo/Logo-White.png" alt="" />
                    <div className='flex gap-16 flex-col items-center md:flex-row my-12'>
                        <div className='flex gap-12'>
                            <ul>
                                <li><h3 className='text-white text-2xl font-medium md:text-[30px]'>روابط مفيدة</h3></li>
                                <li className='text-white text-[16px]'>الرئسية</li>
                                <li className='text-white text-[16px]'>اعثر على عقار</li>
                                <li className='text-white text-[16px]'>من نحن</li>
                                <li className='text-white text-[16px]'>أتصل الأن</li>
                            </ul>

                            <ul>
                                <li><h3 className='text-white text-2xl font-medium md:text-[30px]'> روابط قانونية </h3></li>
                                <li className='text-white text-[16px]'>الشروط والاحكام</li>
                                <li className='text-white text-[16px]'> السياسات </li>
                                <li className='text-white text-[16px]'> محمامي</li>
                                <li className='text-white text-[16px]'> حجز مستشار</li>
                            </ul>
                        </div>
                        <div>
                            {/* subscipre */}
                            <h3 className='text-white text-2xl font-medium md:text-[30px]'>جريدتنا الاللكترونية</h3>
                            <p className='text-gray-600 text-[16px] my-3'>أحصل علي اخر الاخبار وانت في بلدك</p>
                            <div className='flex py-2.5 px-3 bg-white rounded-2xl gap-3 '>
                                <input type="email" name="" id="" className='bg-none text-black placeholder:text-gray-600'  placeholder='أدخل الايميل'/>
                                <button className='py-[10px] px-[15px] rounded-full bg-black text-white text-[12px]'>اشترك</button>
                            </div>
                        </div>
                    </div>

                    {/* hr */}
                    <hr className=' bg-white h-[3px] rounded-full w-full mb-2'/>
                    <p className=' text-white text-[16px] text-center'> نوفيلاند للعقارات - جميع الحقوق محفوظة 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer