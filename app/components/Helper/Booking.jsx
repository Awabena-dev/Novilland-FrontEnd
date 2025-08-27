import React from 'react'
import { GoArrowUpLeft } from "react-icons/go";

const Booking = () => {
    return (
        <div>
            <div className="custom-container py-[4rem]">
                {/* title */}
                <div className=' flex items-center gap-[4rem]'>
                    <h1 className='text-[20px] md:text-3xl lg:text-4xl font-semibold text-black mb-2'>أحجز الأن</h1>
                    <hr className='h-[5px] border-none bg-black rounded-2xl w-[80%]' />
                </div>

                {/* content */}
                <div className=' flex gap-[250px] flex-wrap'>
                    <div className=' w-[400px] text-wrap border-b-4 border-black'>
                        <p className=' tetx-gray-600 text-[14px] md:text-[16px] lg:text-[22px]'>ان كان لديك استفسار أو أية تساؤلات، لا تتردد في الاتصال بنا الآن، فريقنا جاهز لمساعدتك والاجابة عن كل أسئلتك، يمكنك كذلك حجز استشارة مدفوعة لمدة 30 دقيقة</p>
                        {/* buttons */}
                        <div className='flex gap-3 my-8'>
                            <button className=' bg-transparent py-[10px] px-[15px] border-2 border-black rounded-full tetx-black font-medium text-[20px] md:text-2xl'>أتصل بنا</button>
                            <button className=' bg-black text-white text-[20px] md:text-2xl items-center py-[10px] px-[15px] rounded-full flex gap-1.5'>أحجز الان <GoArrowUpLeft /></button>
                        </div>
                    </div>

                    <div>
                        <img src="/office.png" alt="office" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking