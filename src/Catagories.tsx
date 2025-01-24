import { Swiper, SwiperSlide } from "swiper/react";
import image from "./assets/Image.png";
import { Autoplay, Navigation } from "swiper/modules";
import { PinkButton } from "./PinkButton";
const Catagories = () => {
  const Catagories = [
    { image: image },
    { image: image },
    { image: image },
    { image: image },
    { image: image },
    { image: image },
    { image: image },
  ];
  return (
   <>
    <section className=" relative block">
      <header className="mx-auto w-fit text-center mb-5">
        <h2 className="text-header">Catagories</h2>
        <small className="text-SecondaryColor">
          Find what you are looking for
        </small>
      </header>
      <div
        id="catagoriesSlide"
        className=" bg-PrimaryColor pb-10 whitespace-nowrap  mx-auto w-full overflow-visible"
      >
        <div className="relative w-[1110px] mx-auto overflow-visible">
        <Swiper
          navigation={{
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
          }}
          modules={[Navigation]}
          spaceBetween={100}
    
          slidesPerView={3}
          className="justify-items-start  mx-auto overflow-x-clip w-[1100px]"
        >
          {Catagories.map((catagoryobj, i) => {
            if (i % 2 == 0)
              return (
                <SwiperSlide key={i} className=" inline-block">
                  <div className="h-[560px]  bg-defaultImageColor  rounded-t-full -mt-20 w-[300px] content-center">
                    <img
                      className="mx-auto size-20"
                      src={catagoryobj.image}
                      alt="Image"
                    />
                  </div>

                  <button className="block w-fit  mx-auto p-2 rounded-sm bg-defaultImageColor mt-2">
                    Learn More
                  </button>
                </SwiperSlide>
              );
            else
              return (
                <SwiperSlide key={i} className=" inline-block">
                  <div className="h-[560px] bg-defaultImageColor  rounded-t-full mt-20 w-[300px]  content-center">
                    <img
                      className="mx-auto size-20"
                      src={catagoryobj.image}
                      alt="Image"
                    />
                  </div>

                  <button className="block w-fit mx-auto p-2 rounded-sm bg-defaultImageColor mt-2">
                    Learn More
                  </button>
                </SwiperSlide>
              );
          })}
        </Swiper>
          <button
            className="absolute  text-3xl  disabled:bg-gray-500 flex items-center justify-center  -left-20 top-0 bottom-0 rounded-full size-10 bg-white my-auto font-extrabold  p-2 "
            id="swiper-button-prev"
          >
          {"<"}
          </button>
          <button
            className="absolute  disabled:bg-gray-500 text-3xl -right-20 top-0 bottom-0 flex items-center justify-center rounded-full size-10 text-center  bg-white my-auto font-extrabold    p-2 "
            id="swiper-button-next"
          >
            
            {">"}
          </button>
        </div>
      </div>
      <PinkButton text={"See More"} style={'!w-fit !h-fit px-10 py-2 -bottom-12 right-10 absolute'}/>
    </section>
   
    </>
  );
};

export default Catagories;
