import React from 'react';

const Page3card = (props) => {
    const { data } = props;

    return (
        <div className='w-[26%] border-solid border-2 border-white p-10 rounded-2xl h-[auto] mt-8'>
            <img className=' h-20 rounded-xl' src={data.img} alt='workshopImg' />
            <h3 className='mt-2 mb-2 text-2xl font-bold'>{data.name}</h3>
            <div className=' text-[#fbfbfb63] text-xl'>{data.discription}</div>
        </div>
    );
}

export default Page3card;
