import React from 'react';
import Image from 'next/image';
import performance from '/public/imgs/performance.jpg'
import {Metadata} from "next";
export const metadata:Metadata = {
  title:"home"
}
function Page() {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image fill style={{objectFit:"cover"}} src={performance} alt='age'/>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-6xl">Home</h1>
      </div>
    </div>
  );
}

export default Page;
