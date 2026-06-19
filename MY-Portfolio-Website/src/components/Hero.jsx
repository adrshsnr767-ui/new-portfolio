import React from 'react'

const Hero = () => {
  return (
    <>
     <section className="mt-[2.3rem] w-full bg-[#010101]">
      <div className="text-white max-w-[1440px] w-full mx-auto px-[5rem] flex flex-col gap-5">

        <div
          className="text-[#d86d38] text-[1.3em]"
          style={{ fontFamily: "'Segoe UI', sans-serif" }}
        >
          Creative Developer & Designer
        </div>

        <div
          className="text-[rgb(228,228,228)] w-full sm:w-[60%] text-[4em] sm:text-[6em] font-bold text-base/[1.2em]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Crafting digital experiences that leave a mark
        </div>

        <div
          className="mt-4 w-full sm:w-1/2 text-[rgb(168,168,168)] text-[1.3em]"
          style={{ fontFamily: "'Segoe UI', sans-serif" }}
        >
          I design and build beautiful, functional websites and
          applications. Focused on detail, performance, and user experience.
        </div>

        <div
          className="h-[70px] flex gap-8"
          style={{ fontFamily: "'Segoe UI', sans-serif" }}
        >
          {/* View My Work Button */}
          <span className="group flex gap-2 rounded cursor-pointer justify-center items-center h-[70%] w-[170px] bg-[#d86d38] hover:bg-[#be6031] transition-all duration-500">
            <span>View My Work</span>
            <i className="ri-arrow-right-line mt-[5px] group-hover:scale-125 transition-transform duration-300"></i>
          </span>

          {/* Get in Touch Button */}
          <span className="flex rounded border border-[rgb(57,57,57)] cursor-pointer justify-center items-center h-[70%] w-[170px] bg-[#010101] hover:bg-[rgb(16,17,18)] transition-all duration-500">
            Get in Touch
          </span>
        </div>

      </div>
    </section></>
  )
}

export default Hero