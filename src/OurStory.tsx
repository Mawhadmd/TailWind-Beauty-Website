import React from 'react';
import image from './assets/Image.png'
import { PinkButton } from './PinkButton';
const OurStory = () => {
    return (
        <section className='mt-5'>
            <header className='text-center  py-10'>
              <p className='text-header '>  Our Story</p>
            </header>
            <div className='flex h-fit py-10 px-24 gap-20 mx-auto'>
                <div className='w-[600px] min-w-[600px] rounded-[100px] h-[460px] bg-defaultImageColor flex justify-center items-center'>
                    <img  className="size-40" src={image} alt="" />
                </div>
                <div className='w-auto  flex flex-col items-center '>
                    <p className='font-bold text-3xl' style={{fontFamily:'cursive'}}>Over 30 Years of Making Your
                    Day</p>
                    <p className='text-lg my-14 content-center font-light'>Our story of beauty began in 1986, a decade that defied stereotypes
in what was cool, trendy, and stylish. Throughout the years, we ve
stayed true to our mission to bring you the latest and greatest
innovations in hair care, hair styling, hair color, body and skin care,
men s care, and kids care</p>
                    <div>
                    <PinkButton text={'Learn More'} style={'!w-fit !rounded-md px-6'}/>
                    <PinkButton text={'Contact Us'} style={'!w-fit ml-6 !rounded-md  px-6'}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurStory;
