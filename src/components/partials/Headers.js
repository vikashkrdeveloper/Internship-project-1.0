import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import DownHeader from './HeaderComponents/DownHeader'
import Profilebox_SmallBox from './ProfileBox/Profilebox_SmallBox';
import CreateContext from '../context/Create_Context';
function Headers() {
    const [AuthData,IsLogin] = useContext(CreateContext);

    const clickfunction = () => {
        const profilebox = document.querySelector('#profilebox');
        if (profilebox.classList.contains('hidden')) {
            profilebox.classList.remove('hidden');
        } else {

            profilebox.classList.add('hidden');
        }
    }
    const logout = () => {
        const conformation = window.confirm('Are you sure to logout profile');
        if (conformation) {
            window.alert('Logout Sucessfully');
        } else {
            window.alert('Logout cancel Done');
        }
    }
    const profileboxclick = () => {
        clickfunction();
    }
    return (
        <>
            <header className=' h-[180px] w-[100%]    bg-[#1c213b]  '>
                <div className='h-[40px] w-[100%] flex items-center justify-center  bg-[#2a3154eb] sticky top-0 z-[1]'>
                    <div className=' h-[100%] w-[55%] flex items-center justify-center gap-8 cursor-default'>
                        <div className=' flex items-center justify-center gap-1 '>
                            <i className="fi-xnsrxl-phone-solid text-[#ff3e88] text-[14px] mt-1"></i>
                            <span className=' cursor-pointer' ><NavLink to='tel:7362885182' className=' text-[#fff]  text-[13px] font-[500]'>+91 7362885182</NavLink></span>
                        </div>
                        <div className='  h-[100%] flex items-center justify-center gap-2'>
                            <i className="fi-xwsuxl-envelope-solid text-[#ff3e88] text-[11px] mt-1"></i>
                            <span className=' cursor-pointer'><NavLink to='mailto:vikashjjp728@gmail.com' className=' text-[#fff] text-[13px]  font-[500]'>vikashjjp728@gmail.com</NavLink></span>
                        </div>
                        <div className=' flex items-center justify-center gap-1'>
                            <i className="fi-xnsuxl-map-marker-solid text-[#ff3e88] text-[12px]"></i>
                            <span className=' cursor-pointer'><NavLink to='https://maps.app.goo.gl/bSJTBcPnzTFxdz4N7' target=' ' className=' text-[#fff] text-[13px]  font-[500]'>Madhubani (Bihar).</NavLink></span>
                        </div>
                    </div>



                    <div className=' h-[100%] w-[55%] flex items-center justify-center cursor-default  '>
                        <div className=' h-[100%] w-[60%] flex items-center justify-end cursor-default gap-6'>
                            <div className=' flex justify-center items-center gap-1 text-[#ff3e88] font-[700]'>
                                &#8377;
                                <span className=' cursor-default text-[13px] text-[#fff] font-[600]' >IN</span>
                            </div>
                            <div className=' flex justify-center items-center gap-1'>
                                <i className="fi-xwluxl-lock-wide text-[#ff3e88] text-[11px] font-[900] mt-1"></i>
                                <span className=' cursor-pointer text-[13px] text-[#fff]  font-[600] uppercase' onClick={clickfunction}>{AuthData.lastName}</span>
                            </div>
                        </div>
                    </div>




                </div>



                <div id="profilebox" onClick={profileboxclick} className=' hidden w-[200px] h-[auto] rounded-[5px] border-t-2  border-[#c6365f] bg-[#2a3154] absolute right-[100px] top-[44px] z-10'>
                    <Profilebox_SmallBox name="My Profile" iconname="person" url={`/profile/users/${AuthData.username}`} />
                    <Profilebox_SmallBox name="Transaction History" url='/users/transaction/history' iconname="update" />
                    <Profilebox_SmallBox name="Ai Charts" iconname="add_chart" url='/user/ai/chart-bot/' />
                    <Profilebox_SmallBox name="Edit Profile" iconname="edit" url='/users/profile/edit/' />
                    <Profilebox_SmallBox name="Manage History" iconname="manage_history" url='/users/history/manages/' />
                    <div className='flex justify-start items-center p-[10px] cursor-pointer hover:bg-[#354077] ' onClick={logout}>
                        <span className="material-symbols-outlined text-[25px] mr-[5px] ml-[5px] text-[#fff]">
                            logout
                        </span>
                        <span className=' ml-[5px] font-[600] text-[#fff]'>Logout</span>
                    </div>
                </div>




                <div id="clickfunctionrupeschange" className=' hidden w-[150px] h-[150px] rounded-[10px] border-2 bg-[#fff] absolute right-[200px] top-[41px] z-10'>

                </div>




                <div className='h-[90px] w-[100%] flex items-center justify-center border-b-[3px] border-[#bc3f58] ' >
                    <DownHeader />
                </div>
                <div className='h-[50px] w-[100%] flex items-center justify-center border-b-2 bg-[#fff] '>
                    <div className=' w-[81%] h-[100%] flex justify-center items-center gap-8'>
                        <div>
                            <NavLink to='/' className='text-[15px] font-[700] hover:border-b-4 border-[#f55260] '>Home</NavLink>
                        </div>
                        <div>
                            <NavLink to='/product/lists/catergories/hot/deals/best' className='text-[15px] font-[700] hover:border-b-4 border-[#f55260] '>Hot Deals</NavLink>
                        </div>
                        <div>
                            <NavLink to='/product/lists/catergories' className='text-[15px] font-[700] hover:border-b-4 border-[#f55260] '>Catergories</NavLink>
                        </div>
                        <div>
                            <NavLink to='/product/lists/catergories/laptops' className='text-[15px] font-[700] hover:border-b-4 border-[#f55260] '>Laptops</NavLink>
                        </div>
                        <div>
                            <NavLink to='/product/lists/catergories/smartphones' className='text-[15px] font-[700] hover:border-b-4 border-[#f55260] '>SmartProes</NavLink>
                        </div>
                        <div>
                            <NavLink to='/product/lists/catergories/camera' className='  text-[15px] font-[700] hover:border-b-4 border-[#f55260] '>Camera</NavLink>
                        </div>
                        <div>
                            <NavLink to='/product/lists/catergories/phones' className='text-[15px] font-[700] hover:border-b-4 border-[#f55260] '>Phones</NavLink>
                        </div>
                        <div>
                            <NavLink to='/product/lists/catergories/accessories' className='text-[15px] font-[700] hover:border-b-4 border-[#f55260] '>Accessories</NavLink>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Headers
