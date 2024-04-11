import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";

const Accordion = ({tittle,answer}) => {

    console.log(tittle,answer)
    const [accordionOpen, setAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen);
    };

    return (
        <div className=' px-0 py-4 border-b dark:border-white border-slate-900  mb-2'>
        <div className='py-2 '>
            <button  className='flex justify-between w-full' onClick={toggleAccordion}>
                <span className='sm:text-2xl text-lg text-start font-semibold'>{tittle}</span>
                <span>{accordionOpen ? <IoIosArrowUp style={{fontSize:"1.4rem ",marginTop:"0.5rem"}}/> : <SlArrowDown style={{marginTop:"0.5rem"}}/>}</span>
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#8E8989] text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className=' overflow-hidden mt-1 sm:text-lg text-base'>{answer}</div>
            </div>
        </div>
        </div>
    );
};

export default Accordion;
