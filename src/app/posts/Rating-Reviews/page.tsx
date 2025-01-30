// import React from "react";
// import { FaStar, FaCheckCircle, FaStarHalf } from "react-icons/fa";
// import Image from "next/image";

// // Dummy Data
// interface dataType {
//   star: React.ReactNode[];
//   check: React.ReactNode[];
//   heading: string;
//   paragraph: string;
//   posted: string;
// }

// const data: dataType[] = [
//   {
//     star: [
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStarHalf color="orange" size={20} />,
//     ],
//     check: [<FaCheckCircle />],
//     heading: "Samantha D.",
//     paragraph:
//       "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
//     posted: "Posted on August 14, 2023",
//   },
 
//   {
//     star: [
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//     ],
//     check: [<FaCheckCircle />],
//     heading: "Alex M.",
//     paragraph:
//       "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
//     posted: "Posted on August 15, 2023",
//   },
//   {
//     star: [
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStarHalf color="orange" size={20} />,
//     ],
//     check: [<FaCheckCircle />],
//     heading: "Ethan R.",
//     paragraph:
//       "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
//     posted: "Posted on August 16, 2023",
//   },
//   {
//     star: [
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//     ],
//     check: [<FaCheckCircle />],
//     heading: "Olivia P.",
//     paragraph:
//       "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
//     posted: "Posted on August 17, 2023",
//   },
//   {
//     star: [
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//     ],
//     check: [<FaCheckCircle />],
//     heading: "Liam K.",
//     paragraph:
//       "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
//     posted: "Posted on August 18, 2023",
//   },
//   {
//     star: [
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStar color="orange" size={20} />,
//       <FaStarHalf color="orange" size={20} />,
//     ],
//     check: [<FaCheckCircle />],
//     heading: "Ava H.",
//     paragraph:
//       "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
//     posted: "Posted on August 19, 2023",
//   },

// ];

// export default function Review() {
//   return (
//     <main className="mx-4 max-w-[1210px]">
//       <div className="mt-10 flex flex-col">
//         <div className="flex flex-col sm:flex-row justify-between items-center">
//           <h1 className="text-[24px] sm:text-[38px] font-bold text-center sm:text-left">
//             All Reviews{" "}
//             <span className="text-[16px] font-medium text-[#00000099]">
//               (451)
//             </span>{" "}
//           </h1>

//           <div className="flex gap-4 mt-4 sm:mt-0 ">
//             <button className="w-[48px] h-[48px] rounded-[62px] bg-[#F0F0F0] flex justify-center items-center hover:bg-[#250b0b1f]">
//               <Image src="/image36.png" alt="image" width={30} height={30} />
//             </button>
//             <button className="w-[120px] h-[48px] rounded-[62px] bg-[#F0F0F0] hover:bg-[#250b0b1f]">
//               Latest
//             </button>
//             <button className="w-[110px] text-[14px] sm:text-[16px] sm:w-[166px] h-[48px] rounded-[62px] bg-black hover:bg-[#111111e7] text-white">
//               Write a Review
//             </button>
//           </div>
//         </div>
//       </div>

//       <section className="mt-5 grid md:grid-cols-2 md:grid-rows-3 gap-5">
//         {data.map((item, index) => (
//           <div
//             key={`review-${index}`}
//             className="bg-[#0000001A] w-auto h-auto xl:w-[500px] xl:h-[241.58px] rounded-[20px] border-[1px] py-[28px] px-[32px] flex flex-col gap-3"
//           >
//             <span className="flex flex-row gap-2">
//               {item.star.map((star, starIndex) => (
//                 <React.Fragment key={`star-${index}-${starIndex}`}>
//                   {star}
//                 </React.Fragment>
//               ))}
//             </span>
//             <h1 className="flex flex-row gap-2 text-[20px] font-bold">
//               {item.heading}
//               <span className="text-[#01AB31] flex items-center justify-center">
//                 {item.check.map((check, checkIndex) => (
//                   <React.Fragment key={`check-${index}-${checkIndex}`}>
//                     {check}
//                   </React.Fragment>
//                 ))}
//               </span>
//             </h1>

//             <p className="text-[#00000099] font-normal text-[16px]">
//               {item.paragraph}
//             </p>
//             <p className="text-[#00000099] font-medium text-[16px]">
//               {item.posted}
//             </p>
//           </div>
//         ))}
//       </section>

//       <div className="flex justify-center mt-8">
//         <button className="w-[230px] h-[52px] text-[#000000] font-medium text-[16px] bg-[#0000001A] rounded-[62px] hover:bg-[#250b0b1f]">
//           Load More Reviews
//         </button>
//       </div>
//     </main>
//   );
// }



















import React from "react";
import { FaStar, FaCheckCircle, FaStarHalf } from "react-icons/fa";
import Image from "next/image";

// Dummy Data
interface dataType {
  star: React.ReactNode[];
  check: React.ReactNode[];
  heading: string;
  paragraph: string;
  posted: string;
}

const data: dataType[] = [
  {
    star: [
      <FaStar key="star1" color="orange" size={20} />,
      <FaStar key="star2" color="orange" size={20} />,
      <FaStar key="star3" color="orange" size={20} />,
      <FaStar key="star4" color="orange" size={20} />,
      <FaStarHalf key="star5" color="orange" size={20} />,
    ],
    check: [<FaCheckCircle key="check1" />],
    heading: "Samantha D.",
    paragraph:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    posted: "Posted on August 14, 2023",
  },
  {
    star: [
      <FaStar key="star1" color="orange" size={20} />,
      <FaStar key="star2" color="orange" size={20} />,
      <FaStar key="star3" color="orange" size={20} />,
      <FaStar key="star4" color="orange" size={20} />,
    ],
    check: [<FaCheckCircle key="check1" />],
    heading: "Alex M.",
    paragraph:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    posted: "Posted on August 15, 2023",
  },
  {
    star: [
      <FaStar key="star1" color="orange" size={20} />,
      <FaStar key="star2" color="orange" size={20} />,
      <FaStar key="star3" color="orange" size={20} />,
      <FaStarHalf key="star4" color="orange" size={20} />,
    ],
    check: [<FaCheckCircle key="check1" />],
    heading: "Ethan R.",
    paragraph:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    posted: "Posted on August 16, 2023",
  },
  {
    star: [
      <FaStar key="star1" color="orange" size={20} />,
      <FaStar key="star2" color="orange" size={20} />,
      <FaStar key="star3" color="orange" size={20} />,
      <FaStar key="star4" color="orange" size={20} />,
    ],
    check: [<FaCheckCircle key="check1" />],
    heading: "Olivia P.",
    paragraph:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    posted: "Posted on August 17, 2023",
  },
  {
    star: [
      <FaStar key="star1" color="orange" size={20} />,
      <FaStar key="star2" color="orange" size={20} />,
      <FaStar key="star3" color="orange" size={20} />,
      <FaStar key="star4" color="orange" size={20} />,
    ],
    check: [<FaCheckCircle key="check1" />],
    heading: "Liam K.",
    paragraph:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    posted: "Posted on August 18, 2023",
  },
  {
    star: [
      <FaStar key="star1" color="orange" size={20} />,
      <FaStar key="star2" color="orange" size={20} />,
      <FaStar key="star3" color="orange" size={20} />,
      <FaStar key="star4" color="orange" size={20} />,
      <FaStarHalf key="star5" color="orange" size={20} />,
    ],
    check: [<FaCheckCircle key="check1" />],
    heading: "Ava H.",
    paragraph:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    posted: "Posted on August 19, 2023",
  },
];

export default function Review() {
  return (
    <main className="mx-4 max-w-[1210px]">
      <div className="mt-10 flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-[24px] sm:text-[38px] font-bold text-center sm:text-left">
            All Reviews{" "}
            <span className="text-[16px] font-medium text-[#00000099]">
              (451)
            </span>{" "}
          </h1>

          <div className="flex gap-4 mt-4 sm:mt-0 ">
            <button className="w-[48px] h-[48px] rounded-[62px] bg-[#F0F0F0] flex justify-center items-center hover:bg-[#250b0b1f]">
              <Image src="/image36.png" alt="image" width={30} height={30} />
            </button>
            <button className="w-[120px] h-[48px] rounded-[62px] bg-[#F0F0F0] hover:bg-[#250b0b1f]">
              Latest
            </button>
            <button className="w-[110px] text-[14px] sm:text-[16px] sm:w-[166px] h-[48px] rounded-[62px] bg-black hover:bg-[#111111e7] text-white">
              Write a Review
            </button>
          </div>
        </div>
      </div>

      <section className="mt-5 grid md:grid-cols-2 md:grid-rows-3 gap-5">
        {data.map((item, index) => (
          <div
            key={`review-${index}`}
            className="bg-[#0000001A] w-auto h-auto xl:w-[500px] xl:h-[241.58px] rounded-[20px] border-[1px] py-[28px] px-[32px] flex flex-col gap-3"
          >
            <span className="flex flex-row gap-2">
              {item.star.map((star, starIndex) => (
                <React.Fragment key={`star-${index}-${starIndex}`}>
                  {star}
                </React.Fragment>
              ))}
            </span>
            <h1 className="flex flex-row gap-2 text-[20px] font-bold">
              {item.heading}
              <span className="text-[#01AB31] flex items-center justify-center">
                {item.check.map((check, checkIndex) => (
                  <React.Fragment key={`check-${index}-${checkIndex}`}>
                    {check}
                  </React.Fragment>
                ))}
              </span>
            </h1>

            <p className="text-[#00000099] font-normal text-[16px]">
              {item.paragraph}
            </p>
            <p className="text-[#00000099] font-medium text-[16px]">
              {item.posted}
            </p>
          </div>
        ))}
      </section>

      <div className="flex justify-center mt-8">
        <button className="w-[230px] h-[52px] text-[#000000] font-medium text-[16px] bg-[#0000001A] rounded-[62px] hover:bg-[#250b0b1f]">
          Load More Reviews
        </button>
      </div>
    </main>
  );
}