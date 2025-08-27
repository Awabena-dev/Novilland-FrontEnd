import React from 'react'

const Numbers = () => {
    return (
        <div>
            <div className="custom-container bg-black flex items-center py-3 px-12 justify-between ">

                <div className=' flex flex-col gap-y-6 md:flex-row gap-12'>
                    <div className=' flex flex-col gap-y-1'>
                        <h4 className='text-white text-2xl'>+1000</h4>
                        <p className=' text-gray-500'>عقار تم بيعة</p>
                    </div>

                    <div className=' flex flex-col gap-y-1'>
                        <h4 className='text-white text-2xl'>+65</h4>
                        <p className=' text-gray-500'>عملية تسير</p>
                    </div>
                </div>

                <div className=' flex flex-col gap-y-6 md:flex-row gap-12'>
                    <div className=' flex flex-col gap-y-1'>
                        <h4 className='text-white text-2xl'>+400</h4>
                        <p className=' text-gray-500'>زبون وفي</p>
                    </div>

                    <div className=' flex flex-col gap-y-1'>
                        <h4 className='text-white text-2xl'>+115</h4>
                        <p className=' text-gray-500'>عقار متاح </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Numbers