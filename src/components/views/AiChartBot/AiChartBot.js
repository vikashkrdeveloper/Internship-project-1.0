import React, { useState } from 'react'

function AiChartBot() {

  const [getuserdata, setuserdata] = useState({ userquerry: "" });
  const changedata = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setuserdata({ ...getuserdata, [name]: value });
  }

  const chartlistmenushow = () => {
    const chartshowmessages = document.querySelector('#chartshowmessage');
    if (chartshowmessages.classList.contains('hidden')) {
      chartshowmessages.classList.remove('hidden');

    } else {
      chartshowmessages.classList.add('hidden');
    }
  }

  const chartlistmenushowAll = () => {
    // const clickfunctionrupeschange = document.querySelector('#clickfunctionrupeschanges');
    // if (clickfunctionrupeschange.classList.contains('hidden')) {
    //   clickfunctionrupeschange.classList.remove('hidden');
    // } else {

    //   clickfunctionrupeschange.classList.add('hidden');
    // }
    chartlistmenushow();
  }

  const cancelboxbutton = () => {
    chartlistmenushow();
  }

  const bodyclickcancelelement = (event) => {

    // if (event.target) {
    //   chartlistmenushow();
    // }
  }

  return (
    <div className='w-[100%] h-[537px] bg-[#1a576b] justify-center items-center flex'>
      <div className='  w-[100%] h-[100%] flex justify-center items-center '>
        <div className=' w-[20%] h-[100%]   space-y-1'>
          <div className=' cursor-default w-[100%] h-[50px] flex items-center justify-center'>
            <h2 className='text-[22px] font-[700] text-[#fff]'>Chart Lists</h2>
          </div>

          <div className=' w-[100%]  h-[50px] flex items-end justify-center'>
            <div className='cursor-pointer w-[96%]  rounded-[10px] h-[50px] flex items-end justify-center hover:bg-[#2c4164] bg-[#fff] transition ease-in-out delay-150 hover:text-[#ffff]'>
              <div className='w-[87%] h-[100%] flex justify-start items-center '>
                <p className=' ml-[10px] font-[600] truncate'>How to create a html tag  </p>
              </div>
              <div className='w-[13%] h-[100%] flex justify-start items-center '>
                <span className="material-symbols-outlined w-[35px] h-[35px] flex justify-center items-center rounded-[50%] hover:bg-white hover:text-[#000] " onClick={chartlistmenushowAll}>
                  more_vert
                </span>
              </div>
            </div>
          </div>

          <div className=' w-[100%]  h-[50px] flex items-end justify-center'>
            <div className='cursor-pointer w-[96%]  rounded-[10px] h-[50px] flex items-end justify-center hover:bg-[#2c4164] bg-[#fff] transition ease-in-out delay-150 hover:text-[#ffff]'>
              <div className='w-[87%] h-[100%] flex justify-start items-center '>
                <p className=' ml-[10px] font-[600] truncate'>How to create a html tag and javascript  </p>
              </div>
              <div className='w-[13%] h-[100%] flex justify-start items-center '>
                <span className="material-symbols-outlined w-[35px] h-[35px] flex justify-center items-center rounded-[50%] hover:bg-white hover:text-[#000] " onClick={chartlistmenushowAll}>
                  more_vert
                </span>
              </div>
            </div>
          </div>

        </div>


        <div className='w-[100%] h-[100vh]  hidden absolute top-[0px]    left-[0px] bg-[#00000012]' id='chartshowmessage'>
          <div className='  w-[100%] h-[100vh] flex items-center justify-center   bg-[#00000012]' onClick={bodyclickcancelelement}>
            <div className=' bg-[#fff] w-[500px] h-[200px] rounded-[10px] '>
              <div className='w-[100%] h-[80px] flex justify-center items-center '>
                <p className=' text-[20px] font-[700]'>Are you sure to delete data ?</p>
              </div>
              <div className='w-[100%] h-[100px] flex justify-center items-center  gap-6'>
                <button type="button" onClick={cancelboxbutton} className='w-[100px] h-[50px] shadow-inner  flex justify-center items-center bg-[#f79f34] rounded-[5px]'>
                  <span className=' font-[600] text-[#ffffff]'>Cancel</span>
                  <span className="material-symbols-outlined  font-[600] text-[#ffffff]">
                    close
                  </span>
                </button>

                <button type="button" className=' w-[100px] h-[50px] shadow-inner flex justify-center items-center bg-[#f43131] rounded-[5px]'>
                  <span className=' font-[600] text-[#fff]'>Delete</span>
                  <span className="material-symbols-outlined   text-[#fff]">
                    delete_forever
                  </span>
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* <div id="clickfunctionrupeschanges" className=' hidden w-[150px] h-[150px] rounded-[10px] border-2 bg-[#fff] absolute left-[310px] top-[250px] z-10'>

        </div> */}




        <div className=' w-[80%] h-[100%] border-l-2 flex justify-center items-center'>
          <div className='w-[100%] h-[100%] bg-[#212d3a]'>
            <div className='w-[100%] h-[86%]  '>
              <div className=' bg-[#212d3a] w-[100%] h-[100%]  overflow-y-scroll  overflow-x-hidden '>
                <div className=' w-[100%] bg-[#455364] h-[60px] mt-[20px]  p-[10px] flex'>
                  <div className='h-[100%] w-[100px] flex items-center justify-center'>
                    <div className='w-[50px] h-[50px] bg-[#515d6c] rounded-[50%] cursor-pointer transition ease-in-out delay-150 hover:bg-[#65707e]'>

                    </div>
                  </div>
                  <div className='w-[85%] h-[100%] text-[#fff] font-[600] text-[16px] flex justify-center items-center'>
                    <div className=' w-[100%] h-[100%]  flex justify-start items-center'>
                      <input type='text' value={getuserdata.userquerry} className='w-[90%] bg-[#455364] cursor-default  outline-none text-[#fff] h-[auto] overflow-hidden truncate'>


                      </input>
                      <div className=' w-[10%] h-[100%] flex justify-center items-center'>
                        <span className="material-symbols-outlined w-[40px] h-[40px] flex justify-center items-center rounded-[50%] hover:bg-[#ffffff3d] transition ease-in-out  delay-150 cursor-pointer">
                          edit
                        </span>
                      </div>


                    </div>
                  </div>


                </div>

                <div className='w-[100%] h-[auto] bg-[#455364] mt-[10px] flex justify-center items-center'>
                  <div className='w-[8%] h-[90%] flex justify-center items-start'>
                    <div className='w-[50px] h-[50px] bg-[#515d6c] rounded-[50%] cursor-pointer transition ease-in-out delay-150 hover:bg-[#65707e]'>

                    </div>
                  </div>
                  <div className='w-[80%] h-[90%] flex justify-start '>
                    <p className='w-[100%] h-[100%] text-[#fff] '>
                      {getuserdata.userquerry}

                    </p>
                  </div>
                </div>

              </div>
            </div>



            <form className='w-[100%] h-[14%] bg-[#162530] flex'>
              <div className='w-[10%] h-[100%]  '></div>
              <div className='w-[80%] h-[100%] flex justify-center items-center  '>
                <div className='w-[100%] h-[70%] border-2 rounded-tl-[15px] rounded-bl-[15px]   '>
                  <input type="text" placeholder='Type here your query?' name='userquerry' value={getuserdata.userquerry} onChange={changedata} className='p-[10px] bg-none rounded-tl-[10px] rounded-bl-[10px] bg-[#162530] text-[#fff]  outline-none italic font-[500] h-[100%] w-[97%] ml-[10px] ' id='input-box' />
                </div>
              </div>
              <div className='w-[10%] h-[100%]   flex justify-start items-center'>
                <div className='w-[60%] h-[70%] rounded-tr-[15px] rounded-br-[15px]  flex justify-center items-center bg-[#fff] hover:text-[#fff] transition ease-in-out delay-200 hover:bg-[#163413] border-2'>
                  <button type="submit" className='flex justify-center w-[100%] h-[100%] transition delay-200 items-center '>
                    <span className="material-symbols-outlined flex justify-center items-center text-[30px] hover:scale-110  text-[#3a83c7] hover:text-[#fff]">
                      send
                    </span>
                  </button>

                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AiChartBot
