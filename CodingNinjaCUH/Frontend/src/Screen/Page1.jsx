import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Ninjaimg from "./ninjaImg.png"
const Page1 = () => {
    return (
        <div className='flex justify-between item-center mt-14 pr-[6rem] pl-8' >
        <div>
            <div className=' text-5xl font-bold ' style={{ lineHeight: '1.3' }}>
                Welcome To <span className=' text-orange-600'>Coding  Ninjas</span> <br />Student Chapter Of <br />central University Of Haryana
            </div>
            <div className=' mt-4'>
                The Coding Ninjas CUH  student  chapter is CUH's best competitve programming club.<br />Coding Ninjas motive is:Aspire,Learn,Code,Debug,and Achived! We arrange diffrent types<br />of events and hackathons to helpyou explore your coding journey.
            </div>
            <div className=' mt-12 flex gap-8'>
                <Link to="contactus">
                    <Button style={{ background: "#F66C3B", padding: "0.8rem 1.3rem ", fontWeight: "700", borderRadius: "0.7rem" }} variant="contained">
                        Upcoming events
                    </Button>
                </Link>
                <Link to="contactus">
                    <Button style={{ background: "white", color: "black", padding: "0.8rem 1.3rem ", fontWeight: "700", borderRadius: "0.7rem" }} variant="contained">
                        Past events
                    </Button>
                </Link>
            </div>
            
        </div>
        <div>
                <img src={Ninjaimg} alt='NinjaImg' />
            </div>
        </div>
    )
}

export default Page1
