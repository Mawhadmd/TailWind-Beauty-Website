import React from 'react';
import phone from './assets/phone.png';
const footerLinks = [
    { name: 'Hair Care', url: '#' },
    { name: 'Hair Styling', url: '#' },
    { name: 'Skin & Body Care', url: '#' },
    { name: 'eshop', url: '#' },
    { name: 'Sanitizers', url: '#' },
    { name: 'Baby & Kids Care', url: '#' },
    { name: 'Mist & Fragrances', url: '#' },
    { name: 'Cosmaline Sun', url: '#' },
    { name: 'Speak Up', url: '#' },
    { name: 'Contact us', url: '#' },
    { name: 'About us', url: '#' },
    { name: 'News', url: '#' },
    { name: 'Research & Development', url: '#' }
];

const Footer = () => {
    return (
        <footer className='bg-[#f4f6f4] h-60 p-10 flex px-20 mx-auto'>
            <div className='flex-col flex justify-between  w-[70%] pr-20  border-r border-black  '>
            <div className='grid  grid-cols-5 grid-flow-col  grid-rows-3 h-20'>
                {footerLinks.map(link => (
                    <li key={link.name} className='text-sm w-fit h-fit underline'>
                        <a href={link.url} className=' w-full h-full'>{link.name}</a>
                    </li>
                ))}
            </div>
                <div className='text-xl font-bold'>© 2024 Cosmaline. All rights reserved</div>
            </div>
           <div className='text-[#5e5956] ml-4 border-r-black border-r pr-24'>
            <p className='text-2xl'>Information</p>
            <p className='my-2'>About Us <br /> Terms & Condition <br/> Track Your Order</p>
            <small >Contact Us: <br /> <img  className='size-8 inline-block' src={phone} alt="" /> +92 321 3333 333</small>
           </div>
            <div className='text-[#5e5956] ml-4'> 
                <div >Insta Face</div>
                <div className='mt-1'>Stay Connected</div>
                <div className='text-[8px]  whitespace-nowrap'>LIKE US ON FACEBOOK</div>
                <div className='text-[12px] mt-2 '>Heart Share</div>
            </div>
        </footer>
    );
}

export default Footer;
