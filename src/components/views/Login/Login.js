import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
function Login() {
    const [data, setData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const onHandelSubmit = async (event) => {
        event.preventDefault();
        try {
            const { username, password } = data;
            if (!(username && password)) {
                toast.error('All field require');
            }
            else {
                const res = await fetch('https://dummyjson.com/auth/login', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                })
                if (res.status === 200) {
                    const result = await res.json();
                    localStorage.setItem("token", result.token);
                    window.location.assign('/')
                    toast.success("Login Successfully");
                }
                else {
                    toast.error("Invalid login details")
                }
            }

        } catch (error) {
            toast.error('Some technical issue');
        }
    }
    const onHandelChangeInputField = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setData(prev => { return { ...prev, [name]: value } })
    }
    return (
        <div className='w-[100%] h-[100vh] absolute z-50 bg-[#0a131e] top-0 flex justify-center items-center'>
            <div className=' w-[25%] h-[60%]   border-2 rounded-[10px] bg-[#f2f2f2]'>
                <div className=' w-[100%] h-[50px] flex justify-center items-center'>
                    <p className='text-[25px] font-[900] text-[#24163e] '>Login</p>
                </div>
                <form onSubmit={onHandelSubmit} className=' w-[100%] h-[355px] mt-[10px]  '>
                    <div className=' w-[100%] h-[auto] p-[10px]   flex justify-center items-center'>
                        <input type="text" name='username' value={data.username} onChange={onHandelChangeInputField} className=' border w-[95%] h-[50px] focus:outline-none focus:ring focus:border-blue-500 italic font-[600] rounded-[10px] p-[15px] shadow-inner' placeholder='User Name' />
                    </div>
                    <div className='w-[100%] h-[50px] p-[10px]   flex justify-center items-center'>
                        <input type="password" name='password' value={data.password} onChange={onHandelChangeInputField} className=' border w-[95%] h-[50px] italic font-[600] border-none focus:outline-none focus:ring focus:border-blue-500 rounded-[10px] p-[15px] shadow-inner' placeholder='Password' />
                    </div>
                    <div className='w-[100%] h-[70px]  p-[10px]  flex justify-end items-center'>
                        <NavLink to='/user/password/forget/' className='mr-[10px] text-[#681d40] font-[600]'>Forget Password?</NavLink>
                    </div>
                    <div className='w-[100%] h-[80px] p-[10px]  flex justify-center items-center'>
                        <button type="submit" className=' w-[150px] h-[40px] shadow-inner border-2 rounded-[20px] font-[600] bg-gradient-to-r from-cyan-500 to-blue-500 text-[#d1f8d7] '>Login</button>
                    </div>
                    <div className='w-[100%] h-[80px] p-[10px]  flex justify-center items-end'>
                        <div className=' cursor-default text-[14px] font-[600]'>Don't have an account? <NavLink to='/user/signup/' className='text-[#4c90ff] font-[700]'>Sign up</NavLink></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
