import React from 'react'
import { NavLink } from 'react-router-dom'

function Signup() {
    return (
        <div className='w-[100%] h-[100vh] z-50 absolute top-0 bg-[#0a131e] flex justify-center items-center'>
            <div className=' w-[55%] h-[70%]   border-2 rounded-[10px] bg-[#f2f2f2]'>
                <div className=' w-[100%] h-[50px] flex justify-center items-center'>
                    <p className='text-[25px] font-[900] text-[#24163e] '>Sign Up</p>
                </div>
                <form className=' w-[100%] h-[355px] mt-[10px]  '>
                    <div className=' w-[100%] h-[auto] p-[10px]  gap-5  flex justify-center items-center'>
                        <input type="text" className=' border w-[48%] h-[50px] focus:outline-none focus:ring focus:border-blue-500 italic font-[600] rounded-[10px] p-[15px] shadow-inner' placeholder='Name' />
                        <input type="text" className=' border w-[48%] h-[50px] italic font-[600] border-none focus:outline-none focus:ring focus:border-blue-500 rounded-[10px] p-[15px] shadow-inner' placeholder='Email id' />
                    </div>
                    <div className='w-[100%] h-[auto] p-[10px] gap-5   flex justify-center items-center'>
                        <input type="text" className=' border w-[48%] h-[50px] italic font-[600] border-none focus:outline-none focus:ring focus:border-blue-500 rounded-[10px] p-[15px] shadow-inner' placeholder='Username' />
                        <input type="text" className=' border w-[48%] h-[50px] italic font-[600] border-none focus:outline-none focus:ring focus:border-blue-500 rounded-[10px] p-[15px] shadow-inner' placeholder='Phone' />
                    </div>
                    <div className='w-[100%] h-[auto] p-[10px] gap-5   flex justify-center items-center'>
                        <input type="password" className=' border w-[48%] h-[50px] italic font-[600] border-none focus:outline-none focus:ring focus:border-blue-500 rounded-[10px] p-[15px] shadow-inner' placeholder='Password' />
                        <input type="text" className=' border w-[48%] h-[50px] italic font-[600] border-none focus:outline-none focus:ring focus:border-blue-500 rounded-[10px] p-[15px] shadow-inner' placeholder='Conform Password' />
                    </div>
                    <div className='w-[100%] h-[185px] p-[10px]  flex justify-center items-center'>
                        <button type="submit" className=' w-[150px] h-[40px] shadow-inner border-2 rounded-[20px] font-[600] bg-gradient-to-r from-cyan-500 to-blue-500 text-[#d1f8d7] '>Sign Up</button>
                    </div>
                    <div className='w-[100%] h-[10px] p-[10px]  flex justify-center items-end'>
                        <div className=' cursor-default text-[14px] font-[600]'>Have an account? <NavLink to='/user/login/' className='text-[#4c90ff] font-[700]'>Log in</NavLink></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
