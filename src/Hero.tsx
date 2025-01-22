export const Hero = () => {
    return (
      <main className="flex gap-32 justify-center  p-10 mt-2 bg-[#d1b9d8] w-full ">
        <div>
          {" "}
          <div>
            <p className="text-5xl ">Care For Your Skin,</p>
            <p className="text-5xl font-bold">Care For Your Beauty</p>
          </div>
          <div className="mt-7">
            <p className="inline-block pr-2 border-r border-black">
              50+ <br /> products
            </p>
            <p className="inline-block ml-3">
              1000+ <br /> customer
            </p>
          </div>
          <button className=" px-4 text-[#8e8e8e] mt-10 bg-white p-2 rounded-lg">
            Shop Now!
          </button>
        </div>
        <div className="w-96  bg-white rounded-full rounded-ee-none"></div>
      </main>
    );
  };