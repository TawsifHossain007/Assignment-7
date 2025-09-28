import React from 'react';
// import vectorImg from '../assets/B12A7-Customer-Support-Zone/vector1.png'

const Banner = ({taskStatus}) => {
    return (
        <div className='max-w-[1200px] mx-auto flex items-center justify-center gap-4 mt-20'>
            


            <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] flex-1 text-center text-white rounded-[8px] p-[40px] '>
                
                 <p className='text-[24px] font-normal'>In-Progress</p>
                 <span className='text-[60px] font-semibold'>{taskStatus.length}</span>
            </div>
            <div className='bg-gradient-to-r from-[#54cf68] to-[#00827a] flex-1 text-center text-white rounded-[8px] p-[40px]'>
               <p className='text-[24px] font-normal'>Resolved</p>
               <span className='text-[60px] font-semibold'>0</span>
            </div>
        </div>
    );
};

export default Banner;

