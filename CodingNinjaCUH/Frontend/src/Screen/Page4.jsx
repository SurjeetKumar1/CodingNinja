import React from 'react'
import Rectangle from "../Screen/images/Rectangle 19.png"
import Button from '@mui/material/Button'
const Page4 = () => {
    return (
        <div>
            <div className='flex mt-52 sm:justify-between flex-col gap-8 sm:flex-row item-center sm:pr-8 sm:pl-24 pr-8 pl-8'>
                <div classname="">
                    <img className="sm:h-80 h-52 !important" src={Rectangle} alt="ninjaImg" />
                </div>
                <div className=' sm:w-[55%] w-full'>
                    <div className=' sm:text-5xl text-2xl font-bold ' style={{ lineHeight: '1.3' }}>
                        Diligence paves the path to <span className=' text-[#F66C3B]'>success !</span>
                    </div>
                    <div className=' mt-4 sm:text-xl text-base dark:text-[#CECCCC] text-slate-800' style={{ lineHeight: "1.2" }}>
                        The coding Ninja CUH has various people working in different teams according  to their skill set.Here are the different  teams from the club :organizing team ,Content team,Social Media Team,Web team.teachnical team,promotion team,promotion team ,community coordinator,compititive programming team,video Editing team.
                    </div>
                    <div className=' mt-16'>
                <Button className=' w-[9.8rem]  h-[3.2rem] p-8'  style={{ background: "#F66C3B" , fontWeight: "700", borderRadius: "0.7rem" }} variant="contained">
                        Explore
                    </Button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Page4
