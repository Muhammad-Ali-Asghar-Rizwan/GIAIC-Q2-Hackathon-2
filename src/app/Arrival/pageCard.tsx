import Image from 'next/image';
import React from 'react';


interface ArrivalCardProps {
    post: { id: string; title: string; price: string; resp: string; imageUrl: string };
    // isDarkBackground: boolean;
}

export default function ArrivalCard({ post, }: ArrivalCardProps) {
    return (
        <div className='mx-8 '>
            <div className='bg-[#F0EEED] rounded-lg h-[220px]  w-[230px] '>
                <div className='flex flex-col items-center justify-center'>
               

                <a href={`/posts/${post.id}`} >
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={200}
                        height={200}
                        className="w-[190px] object-cover rounded-lg transition hover:scale-75 duration-300 ease-in-out"
                    />
            </a>
                </div>
            </div>
            
           

            <div>
                <h1 className='text-[18px] mt-4 font-bold'>{post.title}</h1>
                <h2 className='text-red-600 font-semibold'>{post.price}</h2>
                {/* <h3 className='text-2xl text-yellow-600 flex items-center '>{post.resp}</h3> */}
            </div>



        </div>

    );
}
