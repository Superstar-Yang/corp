import React from 'react';
import Image, {StaticImageData} from 'next/image';
interface IProps {
  imgUrl:StaticImageData,
  altText:string,
  title:string
}
function Hero({imgUrl, altText,title}: IProps) {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image fill style={{objectFit:"cover"}} src={imgUrl} alt={altText}/>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-6xl">{title}</h1>
      </div>
    </div>
  );
}

export default Hero;
