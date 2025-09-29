import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-white '>
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center p-4'>
                <h1 className='text-[24px] font-bold'>CS — Ticket System</h1>
                <div className='flex flex-col md:flex-row gap-4 items-center'>
                    <a className='mt-4 md:mt-0' href="">Home</a>
                    <a href="">FAQ</a>
                    <a href="">Changelog</a>
                    <a href="">Blog</a>
                    <a href="">Download</a>
                    <a href="">Contact</a>
                    <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">+ New Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;