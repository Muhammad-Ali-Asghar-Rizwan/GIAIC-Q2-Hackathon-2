import Image from "next/image";
import React from "react";
import { GiMailbox } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F0F0F0] mt-44">
  {/* Newsletter Section */}
  <div className="max-w-6xl relative bottom-16 w-full mt-16 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 rounded-[20px] py-[36px] px-[24px] lg:px-[64px] bg-black text-white">
    <div className="lg:flex-1 text-center lg:text-left">
   <h1 className="w-full sm:w-[80%] md:w-[60%] lg:w-[551px] font-bold text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] leading-snug sm:leading-normal lg:leading-tight text-center sm:text-left">
  STAY UPTO DATE ABOUT OUR LATEST OFFERS
</h1>


    </div>
    {/* <div className="flex  items-center  lg:items-center lg:gap-4 lg:flex-1">
      <div className="relative flex items-center w-full max-w-md">
        <MdEmail className="absolute left-4 text-[25px] text-gray-400" />
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full py-[12px] px-[16px] pl-[48px] h-[48px] rounded-[62px] placeholder-gray-500"
        />
      </div>
      <button className="mt-4 lg:mt-0 w-full lg:w-auto py-[12px] px-[24px] bg-white text-black rounded-[50px]">
        Subscribe to Newsletter
      </button>
    </div> */}
        <div className=" ml-36 md:ml-0 flex flex-col items-center justify-center">
        <div className="flex items-center ">
          <MdEmail className="relative right-[108px] text-[25px] text-gray-400"/>
        <input type="text" placeholder="Enter your email address" className="mr-6 w-[250px] sm:w-[349px]  py-[12px] px-[16px] h-[48px] rounded-[62px] ml-[-150px] placeholder:px-[38px]"/>
        </div>
        <div className="bg-white text-black font-semibold text-center w-[250px] sm:w-[349px] h-[48px] rounded-[50px] mt-4 py-[12px] px-[16px] ml-[-150px]">
          <p>Subscribe to Newsletter</p>
        </div>
      </div>
    </div>

  

  {/* Footer Section */}
  <footer className="bg-[#F0F0F0] mt-12">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
      {/* Column 1 */}
      <div>
        <h1 className="text-[24px] font-extrabold">SHOP.CO</h1>
        <p className="text-slate-400 mt-2 text-sm">
          We have clothes that suit your style and which you’re proud to wear.
          From women to men.
        </p>
        {/* <div className="flex items-center gap-4 mt-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="rounded-full w-8 h-8 flex items-center justify-center bg-white text-black hover:text-white hover:bg-black cursor-pointer"
            >
              <FaTwitter />
              <FaFacebookF />

            </div>
          ))}
        </div> */}
        <div className="flex gap-4 items-center mt-3">
          <div className="cursor-pointer flex items-center justify-center rounded-[50%] h-8 w-8 bg-white text-black hover:bg-black hover:text-white">

        <FaTwitter />
          </div>

          <div className="cursor-pointer flex items-center justify-center rounded-[50%] h-8 w-8 bg-white text-black hover:bg-black hover:text-white">
        <FaFacebookF />
          </div>

          <div className="cursor-pointer flex items-center justify-center rounded-[50%] h-8 w-8 bg-white text-black hover:bg-black hover:text-white">

        <FaInstagramSquare />
          </div>

          <div className="cursor-pointer flex items-center justify-center rounded-[50%] h-8 w-8 bg-white text-black hover:bg-black hover:text-white">
        <FaGithub />
          </div>


        </div>
      </div>
      {/* Column 2 */}
      <div>
        <h2 className="text-lg font-semibold">Company</h2>
        {["About", "Features", "Works", "Career"].map((item, idx) => (
          <p key={idx} className="text-slate-400 mt-2 text-sm">
            {item}
          </p>
        ))}
      </div>
      {/* Column 3 */}
      <div>
        <h2 className="text-lg font-semibold">Help</h2>
        {["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"].map((item, idx) => (
          <p key={idx} className="text-slate-400 mt-2 text-sm">
            {item}
          </p>
        ))}
      </div>
      {/* Column 4 */}
      <div>
        <h2 className="text-lg font-semibold">FAQ</h2>
        {["Account", "Manage Deliveries", "Orders", "Payments"].map((item, idx) => (
          <p key={idx} className="text-slate-400 mt-2 text-sm">
            {item}
          </p>
        ))}
      </div>
      {/* Column 5 */}
      <div>
        <h2 className="text-lg font-semibold">Resources</h2>
        {["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"].map((item, idx) => (
          <p key={idx} className="text-slate-400 mt-2 text-sm">
            {item}
          </p>
        ))}
      </div>
    </div>
    <div className="border-t border-slate-300 my-6"></div>
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400 px-4 sm:px-6 lg:px-8">
      <p>Shop.co © 2000-2023, All Rights Reserved</p>
      <div className="flex gap-4 mt-4 sm:mt-0">
        <Image src="/images/f1.png" alt="footer" width={80} height={80}/>
        <Image src="/images/f2.png" alt="footer" width={80} height={80}/>
        <Image src="/images/f3.png" alt="footer" width={80} height={80}/>
        <Image src="/images/f4.png" alt="footer" width={80} height={80}/>
        <Image src="/images/f5.png" alt="footer" width={80} height={80}/>
      </div>
    </div>
  </footer>
</div>

  
  );
};

export default Footer;