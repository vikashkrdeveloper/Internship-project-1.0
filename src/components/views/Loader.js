import React from 'react'
import './Loader.css'
function Loader() {
    return (
        <>
            <div className='w-[100%] mt-4 h-[100%] flex justify-center items-center'>

                <div class="dot-spinner">
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                </div>
            </div>
        </>
    )
}

export default Loader
