'use client';
import React from 'react';
import Image from 'next/image';
import book from "../assets/book.png";
import pc from '../assets/pc.png';
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id='about'>
        <h1 className='text-white text-6xl w-[320px] mx-auto font-semiboldp-4 mb-4'>
            About <span className='text-orange-400'>Me</span></h1>
        <div className='grid md:grid-cols-8 gap-6 place-items-center'>

            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20  rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={book} alt='Book' className='w-auto h-[130px]'/>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                        <p className='text-xl text-whte/70 mt-2'>xxxx</p>
                    </div>
                </div>
            </div>



            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20  rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={pc} alt='Book' className='w-auto h-[130px]'/>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Problem-Solving</h2>
                        <p className='text-xl text-whte/70 mt-2'>xxxx</p>
                    </div>
                </div>
            </div>



            <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20  rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={card} alt='Book' className='w-auto h-[130px]'/>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Exprience</h2>
                        <p className='text-xl text-whte/70 mt-2'>xxxx</p>
                    </div>
                </div>
            </div>




            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20  rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={finance} alt='Book' className='w-auto h-[130px]'/>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>Technical Skill</h2>
                        <p className='text-xl text-whte/70 mt-2'>xxxx</p>
                    </div>
                </div>
            </div>







        </div>
    </div>
  )
}

export default About