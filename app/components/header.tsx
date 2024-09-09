"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
const linkData = [
  {path:'/performance',name:"Performance"},
  {path:'/reliability',name:"Reliability"},
  {path:'/scale',name:"Scale"},
]
const Header = () => {
  const pathname = usePathname()
  return (
    <div className='absolute z-10 w-full'>
      <div className='flex justify-between container mx-auto p-8'>
        <Link className='font-bold text-3xl' href='/'>Home</Link>
        <div className='space-x-4 text-xl'>
          {
            linkData.map(item=>(
              <Link className={pathname === item.path ? 'text-purple-500' : ""} href={item.path} key={item.path}>{item.name}</Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
