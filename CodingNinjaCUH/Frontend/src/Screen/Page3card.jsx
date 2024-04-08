import React from 'react';

const Page3card = (props) => {
    const { data } = props;

    return (
        <div className='w-[28%] min-h-[21rem] border-solid border-[1px] border-white p-10 rounded-2xl h-[auto] mt-8'>
            <img className=' h-20 rounded-xl' src={data.img} alt='workshopImg' />
            <h3 className='mt-3 mb-3 text-2xl font-bold'>{data.name}</h3>
            <p className=' text-[#fbfbfb63] text-xl ' style={{ lineHeight: '1.2' }}>{data.discription}</p>
        </div>
    );
}

export default Page3card;
