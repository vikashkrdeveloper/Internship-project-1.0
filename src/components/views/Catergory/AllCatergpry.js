import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Loader from '../Loader';

function AllCatergpry() {
    const [newproductdata, setnewproductdata] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const [IsLoader, SetIsLoader] = useState(false);
    const userproductlist = async () => {
        try {
            SetIsLoader(true);
            const apiUrl = `https://dummyjson.com/products?limit=${50}`;
            const apidata = await fetch(apiUrl);
            const datas = await apidata.json();
            if (query.get('filterprice') === null || query.get('filterprice') === '') {
                setnewproductdata(datas.products);
                SetIsLoader(false);
            } else {
                const data = datas.products.filter((dataProduct) => {
                    SetIsLoader(false);
                    return dataProduct.price < query.get('filterprice');
                })
                setnewproductdata(data);
                SetIsLoader(false);
            }
        } catch (error) {
            SetIsLoader(false);
            console.log('Some technical issue' + error);
        }
    }

    useEffect(() => {
        userproductlist();
    }, [location])
    if (IsLoader) {
        return <Loader />
    }
    return (
        <>
            <div className='w-[auto] h-[auto] overflow-x-hidden overflow-y-hidden '>
                {newproductdata.length === 0 ? (<div className='w-[80vw] h-[63vh] flex justify-center items-center'>
                    <h2 className="text-3xl font-bold text-gray-700">No Product Found!</h2>
                </div>) :
                    newproductdata.map((element, index) => (
                        <div key={index} className='w-[250px] float-left transition ease-in-out m-[20px]  delay-150 h-[350px] rounded-[10px]  border-2  p-[15px]' >
                            <div className=' w-[100%] h-[180px] flex items-center justify-center  overflow-hidden ' >
                                <img className=' w-[200px] h-[100%]  hover:scale-110  cursor-pointer transition ease-in-out delay-200' src={element.images[0]} alt="Loading.." />
                            </div>
                            <div className=' w-[100%] h-[200px]  '>
                                <div className=' w-[100%] h-[27%]'>
                                    <div className=' w-[150px] h-[20px] truncate  overflow-hidden mt-[2px]  ml-[4px]'>{element.title}...</div>
                                    <div className=' w-[150px] h-[20px] truncate  overflow-hidden mt-[5px] flex items-center gap-1  '>
                                        <span className="material-symbols-outlined text-[14px] flex justify-center items-center  ">
                                            {/* attach_money */}
                                            &#8377;
                                        </span>
                                        <span className='text-[15px] font-[600] '>{element.price}</span>
                                    </div>
                                </div>
                                <div className=' w-[100%] h-[75%] space-y-1'>
                                    <button className=' w-[100%] h-[40px]  border-2 p-[3px] text-[13px] rounded-[5px] bg-[#ce3030] text-[#fff] font-[700] hover:bg-[#337d96] ' >Add-To Cart</button><br />
                                    <button className='  w-[100%] h-[40px]  border-2 p-[3px] text-[13px] rounded-[5px] bg-[#9e2626] hover:bg-[#2f8431] transition ease-linear delay-200 text-[#fff] font-[700]' >Buy Now</button>
                                </div>

                            </div>
                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default AllCatergpry
