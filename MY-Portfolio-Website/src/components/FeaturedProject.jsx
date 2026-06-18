function FeaturedProject() {
  return (
    <>
      <section className="mt-[3rem]">
        <div className=" max-w-[1440px] w-full mx-auto px-5 flex flex-col gap-[15px] h-auto">
          <span className="text-[#7D7F8C] cursor-pointer">
            <i class="ri-arrow-right-down-line"></i> Scroll to explore
          </span>
          <span className=" text-[#D86D38] text-[20px] uppercase">
            Selected Work
          </span>
          <span className="flex justify-between align-baseline">
            <h2
              className=" text-[#EDEEF5] text-3xl font-semibold"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Featured Projects
            </h2>
            <span className="text-[#7D7F8C] hidden sm:block">
              View all projects
            </span>
          </span>


{/* projects */}


          <div className="grid sm:gap-x-[25px] gap-y-[25px]  w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[15px]  ">
           
            <div className=" w-full   h-[57vh]  rounded-xl border border-gray-900">
              <div className="w-full h-[65%] bg-[#0A0B0F] rounded-t-xl text-9xl text-[#7D7F8C] flex  justify-center items-center ">
                <i class="ri-id-card-line"></i>
              </div>
              <div className="p-3 flex flex-col gap-[10px]">
                <span
                  className=" text-[#D86D38] text-[15px] uppercase cursor-pointer"
                  style={{ fontFamily: "'Segoe UI', sans-serif" }}
                >
                  web app
                </span>
                <span
                  className=" text-[1.4em] font-bold tracking-tighter cursor-pointer  "
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  <a href="https://adrshsnr767-ui.github.io/Responsive-Admin-pannel/" className=" no-underline text-amber-50 ">Admin Pannel</a>
                </span>
                <span className="text-[#7D7F8C] tex-[.9em] capitalize  ">
                  A responsive admin pannel to controll your redcord of various
                  stuffs
                </span>
              </div>
            </div>

            {/* break */}

            
            <div className=" w-full  h-[57vh]  rounded-xl border border-gray-900">
              <div className="w-full h-[65%] bg-[#0A0B0F] rounded-t-xl text-9xl text-[#7D7F8C] flex  justify-center items-center ">
                <i class="ri-id-card-line"></i>
              </div>
              <div className="p-3 flex flex-col gap-[10px]">
                <span
                  className=" text-[#D86D38] text-[15px] uppercase cursor-pointer"
                  style={{ fontFamily: "'Segoe UI', sans-serif" }}
                >
                  web app
                </span>
                <span
                  className=" text-[1.4em] font-bold tracking-tighter cursor-pointer  "
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  <a href="https://adrshsnr767-ui.github.io/Responsive-Admin-pannel/" className=" no-underline text-amber-50 ">Admin Pannel</a>
                </span>
                <span className="text-[#7D7F8C] tex-[.9em] capitalize  ">
                  A responsive admin pannel to controll your redcord of various
                  stuffs
                </span>
              </div>
            </div>



            {/* break */}



            <div className="w-full  h-[57vh]  rounded-xl border border-gray-900 ">
           <div className="w-full h-[65%]  bg-[#0A0B0F] rounded-t-xl text-9xl text-[#7D7F8C] flex  justify-center items-center ">
                <i class="ri-id-card-line"></i>
              </div>
              <div className="p-3 flex flex-col gap-[10px]">
                <span
                  className=" text-[#D86D38] text-[15px] uppercase cursor-pointer"
                  style={{ fontFamily: "'Segoe UI', sans-serif" }}
                >
                  web app
                </span>
                <span
                  className=" text-[1.4em] font-bold tracking-tighter cursor-pointer  "
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  <a href="https://adrshsnr767-ui.github.io/Responsive-Admin-pannel/" className=" no-underline text-amber-50 ">Admin Pannel</a>
                </span>
                <span className="text-[#7D7F8C] tex-[.9em] capitalize  ">
                  A responsive admin pannel to controll your redcord of various
                  stuffs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProject;
