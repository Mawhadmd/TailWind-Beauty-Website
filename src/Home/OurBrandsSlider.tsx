//TODO INCOMPLETE

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, } from "swiper/react";
import image from '../assets/image.png';
const OurBrandsSlider = () => {

var brands = [
    { image },
    { image },
    { image },
    { image },
    { image },
    { image },
    { image },
    { image },
    { image },
    { image },
    { image },
    { image },
    { image },
    { image },
];

  return (
<section className="mt-20">
    <header className="mx-auto w-fit my-10">
        <p className="text-header">Our Brands</p>
    </header>
    <Swiper
    modules={[Autoplay]} // Add Autoplay module here
    spaceBetween={20}
    slidesPerView="auto"
    speed={3000}
    
    loop={true}
    autoplay={{
        pauseOnMouseEnter: true,
        delay: 1, // Adjust the delay to your preference
        disableOnInteraction: false,
    }}
    id="slider"
    className="px-5 mx-auto h-fit w-fit max-w-full gap-2 mb-20 whitespace-nowrap overflow-hidden"
>
    {brands.map((brand, index) => (
        <SwiperSlide
            key={index}
            className="size-40 mx-1 inline-block bg-defaultImageColor rounded-2xl"
        >
            {/* Replace with your image */}
            <img src={brand.image} alt={`Brand ${index}`} />
        </SwiperSlide>
    ))}
</Swiper>

</section>

  );
};

export default OurBrandsSlider;
