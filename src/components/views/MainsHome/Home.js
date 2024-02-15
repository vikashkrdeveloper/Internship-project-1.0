import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import CreateContext from '../../context/Create_Context';
import Loader from '../Loader';
function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [IsLoader, SetIsLoader] = useState(false);
    const userproductlist = async () => {
        try {
            SetIsLoader(true)
            const apiUrl = 'https://fakestoreapi.com/products/?limit=6';
            const apidata = await fetch(apiUrl);
            const datas = await apidata.json();
            setData(datas);
            SetIsLoader(false)
        } catch (error) {
            console.log('Some technical issue' + error);
            SetIsLoader(false)
        }
    }
    const [AuthData, IsLogin] = useContext(CreateContext);
    useEffect(() => {
        userproductlist()
    }, [IsLogin])
    const clickfunction = () => {
        const filterbox = document.querySelector('#filterbox');
        if (filterbox.classList.contains('hidden')) {
            filterbox.classList.remove('hidden');
        } else {
            filterbox.classList.add('hidden');
        }
    }
    const onHandelfilterData = (event) => {
        let value = event.target.value;
        navigate(`/?filterprice=${value}`)
        clickfunction();
    }
    if (IsLoader) {
        return <Loader />
    }
    return (
        <>

            <div className="bg-grey col-12 mt-3 ml-4 align-middle justify-content-center flex" >
                <button type="button" onClick={clickfunction} className="btn btn-light mr-10 shadow-sm border-[1px] p-[10px] rounded-[5px]" data-toggle="collapse" data-target="#filters">Filters Price<i className="fa fa-filter"></i></button>
            </div>

            <div id="filterbox" onClick={clickfunction} className=' hidden w-[200px] h-[auto] rounded-[5px] border-t-2  border-[#0e05073d] bg-[#ffffff] border-[1px] absolute left-[100px] top-[35%] z-10'>
                <label className=' pl-[10px] w-[100%] p-[4px] flex justify-start gap-2 items-center'>
                    <input onClick={onHandelfilterData} value={2500} type="radio" name="radio" />
                    <span>Less then 2500</span>
                </label>
                <label className='  pl-[10px]   w-[100%] p-[4px] flex justify-start gap-2 items-center'>
                    <input onClick={onHandelfilterData} value={2000} type="radio" name="radio" />
                    <span>Less then 2000</span>
                </label>
                <label className='  pl-[10px]   w-[100%] p-[4px] flex justify-start gap-2 items-center'>
                    <input onClick={onHandelfilterData} value={1500} type="radio" name="radio" />
                    <span>Less then 1500</span>
                </label>
                <label className=' pl-[10px]    w-[100%] p-[4px] flex justify-start gap-2 items-center'>
                    <input onClick={onHandelfilterData} value={1000} type="radio" name="radio" />
                    <span>Less then 1000</span>
                </label>
                <label className=' pl-[10px]    w-[100%] p-[4px] flex justify-start gap-2 items-center'>
                    <input onClick={onHandelfilterData} value={600} type="radio" name="radio" />
                    <span>Less then 600</span>
                </label>
                <label className='  pl-[10px]   w-[100%] p-[4px] flex justify-start gap-2 items-center'>
                    <input onClick={onHandelfilterData} value={500} type="radio" name="radio" />
                    <span>Less then 500</span>
                </label>
                <label className='  pl-[10px]   w-[100%] p-[4px] flex justify-start gap-2 items-center'>
                    <input onClick={onHandelfilterData} value={300} type="radio" name="radio" />
                    <span>Less then 300</span>
                </label>
                <label className='  pl-[10px]   w-[100%] p-[4px] flex justify-start gap-2 items-center'>
                    <input onClick={onHandelfilterData} value={200} type="radio" name="radio" />
                    <span>Less then 200</span>
                </label>
                <label className='  pl-[10px]   w-[100%] p-[4px] flex justify-start gap-2 items-center'>
                    <input onClick={onHandelfilterData} value={100} type="radio" name="radio" />
                    <span>Less then 100</span>
                </label>
                <label className='  pl-[10px]   w-[100%] p-[4px] flex justify-start gap-2 items-center'>
                    <input onClick={onHandelfilterData} value={50} type="radio" name="radio" />
                    <span>Less then 50</span>
                </label>
            </div>


            <main className='w-[100%] h-[74.9vh] flex justify-center items-center bg-[#ffffff]'>
                <div className='w-[80%] h-[100%]   '>
                    <div className='w-[100%] h-[auto] flex justify-center items-center gap-5 mb-5  mt-10'>
                        {
                            data.map((element, index) => (
                                <div key={index} className="w-[200px] h-[250px]  transition ease-in-out delay-200   rounded-[5px] flex items-center justify-center border-2 cursor-pointer ">
                                    <div className=' w-[100%] h-[100%] flex items-center justify-center  hover:scale-125   p-[15px]  transition ease-in-out delay-150 overflow-hidden'>
                                        <img className='w-[100%] h-[220px]   ' src={element.image} alt="Loading.." />
                                    </div>
                                </div>
                            ))

                        }
                    </div>

                    <div className='w-[100%] h-[auto]  '>
                        <div className='w-[100%] h-[auto] flex justify-center items-center   '>
                            <div className='w-[30%] h-[100px] rounded-[5px] flex items-center justify-start   '>
                                <h1 className=' text-[20px] font-[700]'>NEW PRODUCTS</h1>
                            </div>
                            <div className='w-[70%] h-[100px] rounded-[5px] flex items-center justify-center   '>
                                <nav className='w-[100%] h-[100%] flex items-center justify-center '>
                                    <ul className='w-[100%] h-[100%] flex items-center justify-end gap-6 ' >
                                        <NavLink to='/'><li className='text-[15px] font-[600] hover:border-b-4 border-[#ff7187]'>All</li></NavLink>
                                        <NavLink to='/product/category/?type=laptop'><li className='text-[15px] font-[600] hover:border-b-4 border-[#ff7187]'>Laptops</li></NavLink>
                                        <NavLink to='/product/category/?type=motorcycle'><li className='text-[15px] font-[600] hover:border-b-4 border-[#ff7187]'>Motorcycle</li></NavLink>
                                        <NavLink to='/product/category/?type=lighting'><li className='text-[15px] font-[600] hover:border-b-4 border-[#ff7187]'>Lighting</li></NavLink>
                                        <NavLink to='/product/category/?type=sunglasses'><li className='text-[15px] font-[600] hover:border-b-4 border-[#ff7187]'>Sunglasses</li></NavLink>
                                        <NavLink to='/product/category/?type=tops'><li className='text-[15px] font-[600] hover:border-b-4 border-[#ff7187]'>Tops</li></NavLink>
                                        <NavLink to='/product/category/?type=furniture'><li className='text-[15px] font-[600] hover:border-b-4 border-[#ff7187]'>Furniture</li></NavLink>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className='w-[100%] h-[auto] flex justify-center items-center '>
                            <div className='w-[80vw] h-[auto] flex justify-start items-center mb-5   '>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
