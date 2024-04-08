import React from 'react';
import aman from "../Screen/images/aman.jpeg";
import CardPage5 from './CardPage5';

const Page5 = () => {

    const Mentordata=[{
        img: aman,
        name:"Mr. Anant Rajee Bara",
        position:"Mentor"
    },
    {
        img: aman,
        name:"Vanshika Singh",
        position:"Ex-president"
    }];

    const teamdata = [{
        img: aman,
        name: "Mausam Kumar Giri",
        position: "President"
    },
    {
        img: aman,
        name: "Gautam Kumar Giri",
        position: "Technical Head"
    },
    {
        img: aman,
        name: "Krishnakant Sharma",
        position: "Events Head"
    },
    {
        img: aman,
        name: "Vishal Kumar",
        position: "Marketing Head"
    },
    {
        img: aman,
        name: "Aniket Vaibhav",
        position: "Social Media"
    },
    {
        img: aman,
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
