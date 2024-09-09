import React from 'react';
import reliability from "/public/imgs/reliability.jpg";
import Hero from "@/app/components/hero";
import {Metadata} from "next";
export const metadata:Metadata={
  title:"reliability"
}
const Page = () => {
  return (
    <div>
      <Hero imgUrl={reliability} altText={'Reliability'} title={'Reliability'}  />
    </div>
  );
};

export default Page;
