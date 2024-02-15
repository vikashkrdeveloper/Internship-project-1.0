import React from 'react'

function Profilebox_SmallBox(props) {
    const profileshow = () => {
        window.location.assign(`${props.url}`);
    }
    return (
        <>
            <div className='flex justify-start items-center p-[10px] cursor-pointer hover:bg-[#354077] rounded-tl-[10px] rounded-tr-[10px]' onClick={profileshow} >
                <span className="material-symbols-outlined text-[25px] mr-[5px] ml-[5px] text-[#fff]">
                  {props.iconname}
                </span>
                <span className=' ml-[5px] font-[600] text-[#fff]'>{props.name}</span>
            </div>
        </>
    )
}

export default Profilebox_SmallBox
