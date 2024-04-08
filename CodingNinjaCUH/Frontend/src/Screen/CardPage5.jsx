// CardPage5.jsx
import React from 'react';

const CardPage5 = ({ teamdata, layoutKey }) => {
    return (
        <div>
            {layoutKey === 1 ? (
                <div>
                    <div className='flex flex-col items-center text-5xl font-bold'>
                        <h1> <span className='text-[#F66C3B]'>Our</span> Team</h1>
                        <div className="border-b border-white w-96 mt-4"></div>
                    </div>
                    <div className='flex flex-wrap justify-between pr-4 pl-4'>
                        {teamdata.map((data, index) => (
                            <div key={index} className='w-96 border-solid border-[1px] border-[#CBC3C3] p-10 flex flex-col items-center rounded-3xl mt-40'>
                                <div className='p-[0.6rem] bg-[#F66C3B] rounded-full relative top-[-9rem]'>
                                    <div className="rounded-full overflow-hidden w-52 h-52">
                                        <img className="" src={data.img} alt="TeamleaderImg" />
                                    </div>
                                </div>
                                <div className='flex flex-col items-center gap-2 mt-[-8rem]'>
                                    <h1 className='text-3xl font-bold'>{data.name}</h1>
                                    <h3 className='text-2xl text-[#8E8989]'>{data.position}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                layoutKey === 2 && (
                    <div className=' mt-40'>
                        <div className='flex flex-col items-center text-5xl font-bold'>
                            <h1> <span className='text-[#F66C3B]'>Our</span> Mentor & Former Leads</h1>
                            <div className="border-b border-white w-[55%] mt-4"></div>
                        </div>
                        <div className='flex flex-wrap justify-center gap-16 pr-4 pl-4'>
                            {teamdata.map((data, index) => (
                                <div key={index} className='w-96 border-solid border-[1px] border-[#CBC3C3] p-10 flex flex-col items-center rounded-3xl mt-40'>
                                    <div className='p-[0.6rem] bg-[#F66C3B] rounded-full relative top-[-9rem]'>
                                        <div className="rounded-full overflow-hidden w-52 h-52">
                                            <img className="" src={data.img} alt="TeamleaderImg" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center gap-2 mt-[-8rem]'>
                                        <h1 className='text-3xl font-bold'>{data.name}</h1>
                                        <h3 className='text-2xl text-[#8E8989]'>{data.position}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default CardPage5;
