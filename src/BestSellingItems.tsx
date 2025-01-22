
import { PinkButton } from './PinkButton';

export const BestSellingItems = () => {
      const topselling = [
        {image: '#', title: 'COSMALINE HAIR AND BODYMIST TROPICAL SPLASH 125ml'},
        {image: '#', title: 'COSMALINE HAIR AND BODY MISTSENSUAL DREAM SPLASH 125ml'},
        {image: '#', title: 'COSMALINE HAIR AND BODYMIST FLORAL FANTASY 125ml'},
      ]
    return (
        <section className="h-[600px] mt-5 flex flex-col items-center">
        <header className="text-center">
          <p className="text-3xl ">Best Selling Products</p>
          <small className="text-[#8e8e8e]">
            Easiest way to amazing life by buying your favorite products{" "}
          </small>
        </header>
       <div className="relative flex items-center justify-center gap-10 w-full mt-10">
       <div className="flex gap-10">
       {topselling.map((item)=> 
        <div className="flex flex-col items-center flex-1  w-[240px]">
          <div className=" w-full rounded-3xl h-[400px] bg-gray-400">
            <img src={item.image} alt="" />
          </div>
          <div>
            <p className="text-sm h-16 font-bold">{item.title}</p>
          </div>
         <div> <PinkButton text={'Learn More'}/></div>
        </div>
      )}
       </div>
       <div className="absolute right-40 w-20 h-10">
       <PinkButton text={'See More'}/>
       </div>
       </div>
      </section>
    );
}

export default BestSellingItems;
