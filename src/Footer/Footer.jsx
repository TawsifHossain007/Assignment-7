import React from 'react';

const Footer = () => {
    return (
        <div className='flex items-center justify-between mt-20 p-20 text-white bg-[#000000]'>
            <div>
                <h1>CS — Ticket System</h1>
                <p className='text-[#a1a1aa]'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-medium text-[20px]'>Company</h1>
                 <a className='text-[#a1a1aa]' href="">About Us</a>
                 <a className='text-[#a1a1aa]' href="">Our Mission</a>
                 <a className='text-[#a1a1aa]' href="">Contact Sales</a>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-medium text-[20px]'>Services</h1>
                 <a className='text-[#a1a1aa]' href="">Products & Services</a>
                 <a className='text-[#a1a1aa]' href="">Customer Stories</a>
                 <a className='text-[#a1a1aa]' href="">Download Apps</a>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-medium text-[20px]'>Information</h1>
                 <a className='text-[#a1a1aa]' href="">Privacy Policy</a>
                 <a className='text-[#a1a1aa]' href="">Terms & Conditions</a>
                 <a className='text-[#a1a1aa]' href="">Join Us</a>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-medium text-[20px]'>Social Links</h1>
                 <a className='text-[#a1a1aa]' href=""><i class="fa-brands bg-white h-[22px] w-[45px] p-1 text-black rounded-full fa-x-twitter"></i>  @CS — Ticket System</a>
                 <a className='text-[#a1a1aa]' href=""><i class="fa-brands bg-white h-[22px] w-[45px] p-1 text-black rounded-full fa-linkedin"></i>  @CS — Ticket System</a>
                 <a className='text-[#a1a1aa]' href=""><i class="fa-brands bg-white h-[22px] w-[45px] p-1 text-black rounded-full fa-facebook"></i>  @CS — Ticket System</a>
                 <a className='text-[#a1a1aa]' href=""><i class="fa-solid bg-white h-[22px] w-[45px] p-1 text-black rounded-full fa-envelope"></i>  support@cst.com</a>
            </div>
        </div>
    );
};

export default Footer;