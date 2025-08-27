"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import {
    LoginLink,
    LogoutLink,
    RegisterLink,
  } from "@kinde-oss/kinde-auth-nextjs/components";

import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const MobileNav = ({NavLink , user}) => {
    const [isopen , setisopen] = useState(false);

    const open = () => {setisopen(true)};
    const close = () => {setisopen(false)};

  return (
    <div>
        {/* menu button */}
        <IoMenu className=' w-8 h-8 text-black block md:hidden' onClick={open}/>

        {/* Nav link */}
        <ul className={`fixed top-0 left-0 w-[50%] h-screen flex flex-col py-12 z-50 px-2.5 items-center bg-slate-100 transition-all duration-300 shadow-sm ${isopen ? ("translate-x-0") : ("-translate-x-full")} `}>
            {NavLink.map((link) => {
                return(
                    <li key={link.id}><Link href={link.url} className='text-2xl font-bold'>{link.text}</Link></li>
                )
            })}

            <li><IoClose className=' w-8 h-8 absolute top-4 right-4' onClick={close}/></li>

            <li><hr className=' w-full h-[5px] bg-gray-900'/></li>
            
            <div className=' mt-12 flex flex-col gap-y-3 items-center'>
                {!user 
                ? (
                    <>
                        <LoginLink>
                            <button className='btn-1'>تسجيل دخول</button>
                        </LoginLink>
                        <RegisterLink>
                                <button className='btn-1'>أنشاء حساب</button>
                        </RegisterLink>
                    </>
                ) 
                : (
                    <>
                    <LogoutLink>
                        <button className='btn-1'>الخروج</button>
                    </LogoutLink>
                    </>
                )
                }
            </div>

            <hr className=' w-full h-[3px] bg-gray-400 my-4'/>

            {/* shocail media */}
            <div className='flex items-center gap-3'>
                <FaFacebookSquare className='w-8 h-8'/>
                <IoLogoWhatsapp className='w-8 h-8'/>
                <AiFillInstagram className='w-8 h-8'/>
            </div>
        </ul>
    </div>
  )
}

export default MobileNav