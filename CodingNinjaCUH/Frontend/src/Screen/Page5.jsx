import React from 'react';
import aman from "../Screen/images/aman.jpeg";
import CardPage5 from './CardPage5';
import mausam from "../Screen/images/mausam.png"
import gautam from "../Screen/images/gautam.png"
import Krishnakant  from "../Screen/images/KK.png"
import Vishal  from "../Screen/images/Vishal.png"
import Aniket  from "../Screen/images/Aniket.jpg"
import Abhyanand  from "../Screen/images/Abyanand.png"
import AnatSir from "../Screen/images/AnatSir.png"
import vanshika from "../Screen/images/vanshika1.jpg"

const Page5 = () => {

    const Mentordata=[{
        img: AnatSir,
        name:"Mr. Anant Rajee Bara",
        position:"Mentor"
    },
    {
        img: vanshika,
        name:"Vanshika Singh",
        position:"Ex-president"
    }];

    const teamdata = [{
        img: mausam,
        name: "Mausam Kumar Giri",
        position: "President"
    },
    {
        img: gautam,
        name: "Gautam Kumar Giri",
        position: "Technical Head"
    },
    {
        img: Krishnakant,
        name: "Krishnakant Sharma",
        position: "Events Head"
    },
    {
        img: Vishal,
        name: "Vishal Kumar",
        position: "Marketing Head"
    },
    {
        img: Aniket,
        name: "Aniket Vaibhav",
        position: "Social Media"
    },
    {
        img: Abhyanand,
        name: "Abhyanand",
        position: "Design Head"
    }];

    return (
        <div className='mt-48'>
            <CardPage5 teamdata={teamdata} layoutKey={1} />
            <CardPage5 teamdata={Mentordata} layoutKey={2}/>
            </div>
    )
}

export default Page5;
