import React from 'react';
import scale from "/public/imgs/scale.webp";
import Hero from "@/app/components/hero";
import {Metadata} from "next";
export const metadata:Metadata={
  title:"scale"
}
const Page = () => {
  return (
    <div>
      <Hero imgUrl={scale} altText={'Scale'} title={'Scale'}  />
    </div>
  );
};

export default Page;
