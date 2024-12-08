import React from 'react'

export default function DressStyle() {
  return (
<div className="max-w-[95%] lg:max-w-[1239px] mx-auto bg-[#F0F0F0] rounded-[30px] mt-10 sm:mt-16 lg:mt-28">
  <div className="py-8 px-6 sm:py-10 sm:px-12 lg:py-11 lg:px-14">
    {/* Header */}
    <h1 className="text-center text-[24px] sm:text-[36px] lg:text-[48px] font-extrabold mt-3">
      BROWSE BY DRESS STYLE
    </h1>

    {/* Grid Section */}
    <div className="mt-12 sm:mt-16 lg:mt-20 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[10rem] sm:auto-rows-[14rem] lg:auto-rows-[18rem]">
      {/* Casual */}
      <div className="bg1 bg-white text-black rounded-lg p-4 flex items-start">
        <h1 className="text-[20px] sm:text-[28px] lg:text-[36px] font-bold">Casual</h1>
      </div>

      {/* Formal */}
      <div className="bg2 bg-white text-black rounded-lg p-4 sm:col-span-2 flex items-start">
        <h1 className="text-[20px] sm:text-[28px] lg:text-[36px] font-bold">Formal</h1>
      </div>

      {/* Party */}
      <div className="bg3 bg-white text-black rounded-lg p-4 col-span-2 sm:col-span-1 lg:col-span-2 flex items-start">
        <h1 className="text-[20px] sm:text-[28px] lg:text-[36px] font-bold">Party</h1>
      </div>

      {/* Gym */}
      <div className="bg4 bg-white text-black rounded-lg p-4 flex items-start">
        <h1 className="text-[20px] sm:text-[28px] lg:text-[36px] font-bold">Gym</h1>
      </div>
    </div>
  </div>
</div>


  )
}
