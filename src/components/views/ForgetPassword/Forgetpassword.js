import React from 'react'
import { NavLink } from 'react-router-dom'

function ForgetPassword() {
    return (
        <div className='w-[100%] h-[100vh] z-50 bg-[#0a131e] absolute top-0 flex justify-center items-center'>
            <div className=' w-[25%] h-[60%]   border-2 rounded-[10px] bg-[#f2f2f2]'>
                <div className=' w-[100%] h-[50px] flex justify-center items-center'>
                    <p className='text-[20px] font-[900] text-[#24163e] '>Forget Password.</p>
                </div>
                <form className=' w-[100%] h-[355px] mt-[10px]  '>
                    <div className=' w-[100%] h-[auto] p-[10px]   flex justify-center items-center'>
                        <input type="text" className=' border w-[95%] h-[50px] focus:outline-none focus:ring focus:border-blue-500 italic font-[600] rounded-[10px] p-[15px] shadow-inner' placeholder='Emall id' />
                    </div>
                    <div className='w-[100%] h-[50px] p-[10px]   flex justify-center items-center'>
                        <input type="text" className=' border w-[95%] h-[50px] italic font-[600] border-none focus:outline-none focus:ring focus:border-blue-500 rounded-[10px] p-[15px] shadow-inner' placeholder='New Password' />
                    </div>

                    <div className='w-[100%] h-[50px] p-[10px] mt-[10px] flex justify-center items-center'>
                        <input type="text" className=' border w-[95%] h-[50px] italic font-[600] border-none focus:outline-none focus:ring focus:border-blue-500 rounded-[10px] p-[15px] shadow-inner' placeholder='Conform Password' />
                    </div>
                    <div className='w-[100%] h-[90px] p-[10px]  flex justify-center items-center'>
                        <button type="submit" className=' w-[150px] h-[40px] shadow-inner border-2 rounded-[20px] font-[600] bg-gradient-to-r from-cyan-500 to-blue-500 text-[#d1f8d7] '>Password Update</button>
                    </div>
                    <div className='w-[100%] h-[80px] p-[10px]  flex justify-center items-end'>
                        <div className=' cursor-default text-[14px] font-[600]'>Don't have an account? <NavLink to='/user/signup/' className='text-[#4c90ff] font-[700]'>Sign up</NavLink></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword;
