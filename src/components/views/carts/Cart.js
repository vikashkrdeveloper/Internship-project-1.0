import React, { useEffect, useState } from 'react'
import Loader from '../Loader';
function Cart() {
    const [totalCart, setTotalCart] = useState([]);
    const [totalCartPrice, setTotalCartPrice] = useState([]);
    const userproductlist = async () => {
        try {
            const apiUrl = `https://dummyjson.com/carts`;
            const apidata = await fetch(apiUrl);
            const datas = await apidata.json();
            setTotalCart(datas.carts[0].products);
            setTotalCartPrice(datas.carts[0]);
        } catch (error) {
            console.log('Some technical issue' + error);
        }
    }

    useEffect(() => {
        userproductlist();
    }, [])

    return (
        <>
            <div className="container  mx-auto  p-[30px] pt-0">
                <div className="flex shadow-md my-4">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{totalCart.length} Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        {totalCart.length === 0 ?(<Loader />) :
                            totalCart.map((carts) => (
                                <div key={carts.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24" src={carts.thumbnail} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{carts.title}</span>
                                            <span className="text-red-500 text-xs">{carts.title}</span>
                                            <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <svg className="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                        <button className="mx-2 border cursor-default text-center w-8" type="text" value="1" >
                                            {carts.quantity}
                                        </button>
                                        <svg className="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512">
                                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">&#8377; {carts.price}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">&#8377; {carts.price * carts.quantity}</span>
                                </div>

                            ))
                        }



                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {totalCartPrice.totalProducts}</span>
                            <span className="font-semibold text-sm">{totalCartPrice.total} &#8377;</span>
                        </div>
                        <div className="flex justify-between mt-1 mb-5">
                            <span className="font-semibold  text-xs uppercase">Total Quantity</span>
                            <span className="font-semibold text-xs">&#8377; {totalCartPrice.totalQuantity} </span>
                        </div>
                        <div className="flex justify-between mt-1 mb-5">
                            <span className="font-semibold text-xs uppercase">Total discounted</span>
                            <span className="font-semibold text-xs">&#8377; {totalCartPrice.discountedTotal}</span>
                        </div>

                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>&#8377; {totalCartPrice.total}</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Cart
