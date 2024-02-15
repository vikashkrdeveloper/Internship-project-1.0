import React from 'react'
import Headers from './components/partials/Headers'
import { Route, Routes } from 'react-router-dom'
import Home from './components/views/MainsHome/Home'
import Login from './components/views/Login/Login'
import Signup from './components/views/Signup/Signup'
import ForgetPassword from './components/views/ForgetPassword/Forgetpassword'
import AiChartBot from './components/views/AiChartBot/AiChartBot'
import AllCatergpry from './components/views/Catergory/AllCatergpry'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Catergory from './components/views/Catergory/Catergory'
import Search from './components/views/Search/Search'
import Cart from './components/views/carts/Cart'
function App() {
  return (
    <>

      <Headers />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/' element={<AllCatergpry />} />
          <Route path='/product/category' element={<Catergory />} />
        </Route>
        <Route path='/product/search' element={<Search />} />
        <Route path='/user/cart/data/' element={<Cart />} />
        <Route path='/product/lists/catergories/hot/deals/best' element={"Hot Deals"} />
        <Route path='/product/lists/catergories' element={"Catergories"} />
        <Route path='/product/lists/catergories/laptops' element={"Laptops"} />
        <Route path='/product/lists/catergories/smartphones' element={"SmartPhones"} />
        <Route path='/product/lists/catergories/camera' element={"Camera"} />
        <Route path='/product/lists/catergories/phones' element={"Phones"} />
        <Route path='/product/lists/catergories/accessories' element={"Accessories"} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/signup' element={<Signup />} />
        <Route path='/user/password/forget/' element={<ForgetPassword />} />
        <Route path='/user/ai/chart-bot/' element={<AiChartBot />} />
      </Routes>

    </>
  )
}

export default App
