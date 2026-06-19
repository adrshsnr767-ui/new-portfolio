import React from 'react'

const Footer = () => {
  return (
   <>


            <footer className=" mt-[8rem]" >
                <div className=" max-w-[1440px] w-full mx-auto  px-[5rem] pb-7">
                     <hr className=" text-[#555555] mb-[2rem]" />
                    <div className=" flex  justify-between">
                        <div className=" flex gap-1">
                            <span className=" text-[#7D7F8C] ">© 2026 Portfolio.</span>
                            <span className=" text-[#7D7F8C] ">Built with care.</span>
                        </div>
                        <div className=" text-[#7D7F8C]">
                            <ul className=" flex  gap-[25px]">
                                <li className=" cursor-pointer">  <a href="https://github.com/adrshsnr767-ui">Github  </a></li>
                                <li className=" cursor-pointer">Linkedin</li>
                                <li className=" cursor-pointer">Twitter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
  )
}

export default Footer