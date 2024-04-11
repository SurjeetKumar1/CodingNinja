import React from 'react';

const Page3card = (props) => {
    const { data } = props;

    return (
        <div className='sm:w-[28%] w-[100%] min-h-[21rem] border-solid border-[1px] dark:border-white border-slate-900 p-10 rounded-2xl h-[auto] mt-8'>
            <img className=' sm:h-20 h-16 rounded-xl bg-slate-700 ' src={data.img} alt='workshopImg' />
            <h3 className='mt-3 mb-3 sm:text-2xl text-xl font-bold'>{data.name}</h3>
            <p className=' dark:text-[#fbfbfb63] text-slate-800 sm:text-xl text-lg ' style={{ lineHeight: '1.2' }}>{data.discription}</p>
        </div>
    );
}

export default Page3card;
