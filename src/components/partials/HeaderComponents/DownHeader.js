import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DownHeader = () => {
    const [search, setsearch] = useState('')
    const navigate = useNavigate();
    const cartpage = () => {
        window.location.assign('/user/cart/data/')
    }
    const wishlistpage = () => {
        window.location.assign('/user/wishlist/data/')
    }
    const onHandelDataChange = (event) => {
        setsearch(event.target.value);
    }
    const OnHandelSubmit = (event) => {
        event.preventDefault();
        if (search.trim() === '') {
            toast.warning('Please Enter Product Name');
        } else {
            const catergoryFind = document.querySelector('#catergory').value;
            navigate(`/product/search/?catergory=${catergoryFind}&search=${search}`)
            setsearch('');

        }
    }
    return (
        <>
            <div className="   w-[81%] h-[100%] flex justify-center items-center">
                <div className="w-[25%] h-[100%] flex justify-start items-center">
                    <NavLink to='/' className='text-[30px] text-[#fff] font-[700] mb-4'>
                        VikashKumar<span className="text-[50px] text-[#ff50a2]">.</span>
                    </NavLink>
                </div>




                <div className="w-[50%] h-[100%] flex justify-center items-center">
                    <form onSubmit={OnHandelSubmit} className="  bg-[#fff]  h-[45%] w-[100%] rounded-[40px] flex justify-center items-center">
                        <div className="w-[20%] h-[100%] flex justify-center items-center rounded-tl-[40px] rounded-bl-[40px] border-r-2">
                            <select name="catergory" id="catergory" className=" p-[8px] outline-none border-none  rounded-tl-[40px] rounded-bl-[40px] text-[14px] font-[500]">
                                <option value="phone">Phone</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="w-[60%] h-[100%] flex justify-center items-center">
                            <input type="text" className="p-[7px] w-[100%] border-none outline-none bg-[#fff]  italic text-[14px] font-[500]" value={search} onChange={onHandelDataChange} name='search' id="search" placeholder="Search here ? " />
                        </div>
                        <div className="w-[20%] h-[100%] flex justify-center items-center rounded-tr-[40px] rounded-br-[40px] bg-[#e32d54] cursor-pointer">
                            <button type="submit" className="w-full h-full text-[15px] text-[#fff] font-[700]">Search</button>
                        </div>

                    </form>
                </div>



                <div className="w-[25%] h-[100%] flex justify-end items-center gap-8">
                    <div className=" cursor-pointer w-[75px]" onClick={wishlistpage}>
                        <div className=" w-full flex justify-center items-center mb-1"><i className="fa-sharp fa-regular fa-heart text-[14px] text-[#fff]"></i></div>
                        <div className=" w-full flex justify-center items-center text-[#fff] text-[12px] font-[500]">Your Wishlist</div>
                    </div>
                    <div className=" cursor-pointer w-[55px]" onClick={cartpage}>
                        <div className=" w-full flex justify-center items-center mb-1"><i className="fa-solid fa-cart-shopping text-[14px] text-[#fff]"></i></div>
                        <div className=" w-full flex justify-center items-center text-[#fff] text-[12px] font-[500]">Your Cart</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DownHeader;