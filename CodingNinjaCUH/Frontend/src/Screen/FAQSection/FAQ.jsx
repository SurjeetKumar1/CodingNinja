import React from 'react'
import Accordian from './Accordian'

const FAQ = () => {
    return (
        <>
            <div className='mt-40'>
                <div className=' flex flex-col justify-center items-center'>
                    <div className=' text-5xl font-bold'>FAQ</div>
                    <div className=' w-36 border-b  border-white mt-4'></div>
                </div>
            </div>


            <div className='flex justify-center mt-8  '>
                <div className='w-[70%]'>
                    <Accordian tittle="How to join coding ninjas core team?" answer="To contact Mausam" />
                    <Accordian tittle="What is the interview process to join coding ninjas cuh?" answer="There are are rounds then you get interview" />
                    <Accordian tittle="How to apply for the interview?" answer="You get a google form regarding this" />
                    <Accordian tittle="How to contact core team?" answer="In the contact section you get some eamils regarding this." />

                </div>
            </div>
        </>
    )
}

export default FAQ