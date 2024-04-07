import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import ninjaImg from "./ninjaImg2.png"
const Page2 = () => {
  return (
    <div className='flex mt-24 justify-between item-center pr-8 pl-24'>
      <div classname="">
      <img className="h-80 !important" src={ninjaImg} alt="ninjaImg"/>
      </div>
      <div className=' w-[55%]'>
        <div className=' text-5xl font-bold '>
            We are the embodiement of <br/>individual,architects of<br/> our own density.
        </div>
        <div className=' mt-4'>
            At Coding Ninja, WE Firmly believe in the inheritence unique of every individual,recognizing thateach person harbords their own set of talents waiting to be discoverd.Our mission is to offer pathways for skill enhancement and self-discovery,empowering students to unlock their full potential.through active learning experiance and foastring meaningful connections,we create enviroments where students can thrive and excel.
        </div>
        <div className=' mt-4 flex flex-col gap-4'>
            <div className=' w-full border-solid  border-2  border-white text-2xl font-semibold p-3 rounded-md flex gap-4 justify-start items-center' > <BsCheckCircle className='mt-2'/>Become Ready For Industry With us</div>
            <div  className=' w-full border-solid  border-2  border-white text-2xl font-semibold p-3 rounded-md flex gap-4 justify-start items-center'> <BsCheckCircle className='mt-2'/>Regular competition/events</div>
            <div  className=' w-full border-solid  border-2  border-white text-2xl font-semibold p-3 rounded-md flex gap-4 justify-start items-center'><BsCheckCircle className='mt-2' />ready to learn and earn</div>
        </div>
      </div>
    </div>
  )
}

export default Page2
