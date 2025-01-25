import React from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

const CustomerReviews = () => {
  const reviews = [
    {
      text: "Amazing product! My skin feels so much better.",
      name: "Jane Doe",
      rating: 5,
    },
    {
      text: "Good value for the price.",
      name: "John Smith",
      rating: 4,
    },
    {
      text: "Not bad, but I expected more.",
      name: "Alice Johnson",
      rating: 3,
    },
    {
      text: "I love the fact that Cosmaline created a shampoo and conditioner for Hijabiwomen. My hair was messy and dry. But after using Soft Wave Hijab Shampooand Conditioner, my hair became easier to manage immediately!",
      name: "Wafaa",
      rating: 3,
    },
  ];

  return (
    <section className="mb-10">
      <header className="text-header text-center mt-6">
        <p>
          What customers say about <br />{" "}
          <div className="-translate-y-6">COSMALINE?</div>
        </p>
      </header>
      <Swiper
      slidesPerView={2}
      className=" whitespace-nowrap pl-20 pr-40 overflow-x-clip text-[#4f4f4f]">
        {reviews.map((review) => (
          <SwiperSlide className="inline-block mx-4 relative h-[220px] rounded-lg bg-PrimaryColor">
            <div className="text-8xl absolute top-4 left-4">
              <p>"</p>
            </div>
            <div className="ml-12 mt-20 ">
              <p className="whitespace-normal h-[60px] text-sm ">{review.text}</p>
              <p className="mt-4 font-bold ">
                {review.name} <br /> * {review.rating}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerReviews;
