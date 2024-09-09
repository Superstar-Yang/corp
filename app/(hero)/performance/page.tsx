import React from 'react';
import Hero from "@/app/components/hero";
import performance from '/public/imgs/performance.jpg'
import {Metadata} from "next";
export const metadata:Metadata = {
  title:"performance"
}
const Page = () => {
  return (
    <div>
      <Hero imgUrl={performance} altText={'home'} title={'Home'}  />
    </div>
  );
};

export default Page;
