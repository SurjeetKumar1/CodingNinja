import React from 'react'

const Page5card = (props) => {
    const data=props.data;
    console.log(data);
  return (
    <div>
      <div className='w-[32%] border-solid border-[1px] border-[#CBC3C3] p-10 flex flex-col items-center rounded-3xl mt-40'>
                        <div className='p-[0.6rem] bg-[#F66C3B] rounded-full relative top-[-8rem]'>
                            <div className="rounded-full overflow-hidden w-52 h-52">
                                <img className="" src={data.img} alt="TeamleaderImg" />
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-2 mt-[-7rem]'>
                            <h1 className='text-[2.2rem] font-bold'>{data.name}</h1>
                            <h3 className='text-2xl text-[#8E8989]'>{data.position}</h3>
                        </div>
                    </div>
    </div>
  )
}

export default Page5card
