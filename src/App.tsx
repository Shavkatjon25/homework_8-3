

function App():any{


  return (
    <div className="w-full ">
      <div className="absolute w-full z-[-1]">
        <img src="./monilni.svg" alt="" className="w-full block lg:hidden" />
        <img src="destop.png" alt="" className="w-full lg:block hidden" />
      </div>
      <div className="top-0 z-10 w-full flex flex-col items-center pt-6">
        <h1 className="text-[26px] text-white lg:text-[32px]">IP Address Tracker</h1>
          <div className="mt-[29px]">
          <input type="text" placeholder="Search for any IP address or domain" className="bg-white text-black w-[327px] lg:w-[555px] h-[58px] rounded-2xl int" />
          <button className="absolute w-[58px] h-[58px] rounded-r-2xl ml-[-58px] pl-[26px]   bg-black"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">  <path d="M2 2L8 8L2 14" stroke="white" stroke-width="3"/></svg></button>
          </div>
          <div className="w-[327px] flex flex-col bg-white pt-[26px] pb-6 rounded-2xl z-50 gap-6 mt-6 lg:mt-12 lg:h-[161px] lg:flex-row lg:w-[1110px] lg:px-8 lg:gap-16 items-center">
                <div className="flex flex-col gap-[7px] lg:gap-[13px]">
                    <p className="p lg:text-[12px] lg:font-bold lg:text-left">IP Address</p>
                    <h2 className="h lg:text-left lg:text-[26px]">192.212.174.101</h2>
                </div>
                <div className="hidden lg:block  w-[1px] h-[75px] bg-black opacity-15"></div>
                <div className="flex  flex-col gap-[7px] lg:gap-[13px] ">
                    <p className="p lg:text-left lg:text-[12px] lg:font-bold">Location</p>
                    <h2 className="h lg:text-left lg:text-[26px]">Brooklyn, NY 10001</h2>
                </div>
                <div className="hidden lg:block  w-[1px] h-[75px] bg-black opacity-15"></div>
                <div className="flex flex-col gap-[7px] lg:gap-[13px] ">
                    <p className="p lg:text-left lg:text-[12px] lg:font-bold">Timezone</p>
                    <h2 className="h lg:text-left lg:text-[26px] lg:w-[150px]">UTC-05:00</h2>
                </div>
                <div className="hidden lg:block  w-[1px] h-[75px] bg-black opacity-15"></div>
                <div className="flex flex-col gap-[7px] lg:gap-[13px] lg:top-0 ">
                    <p className="p lg:text-left lg:text-[12px] lg:font-bold">ISP</p>
                    <h2 className="h lg:text-left lg:text-[26px]">SpaceX Starlink</h2>
                </div>
          </div>
      </div>
      <div className="bg-[#D8D8D8] mt-[-90px] lg:pt-[60px]">
        <img src="./mobilXarita.png" alt="" className="mt-[-170px] lg:mt-0 z-0 relative w-full lg:hidden" />
        <img src="./Maps.png" alt="" className=" z-0 relative w-full hidden lg:block " />
      </div>
    </div>
  )
}

export default App
