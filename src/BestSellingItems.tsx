
import { PinkButton } from './PinkButton';

export const BestSellingItems = () => {
      const topselling = [
        {image: '#', title: 'COSMALINE HAIR AND BODYMIST TROPICAL SPLASH 125ml'},
        {image: '#', title: 'COSMALINE HAIR AND BODY MISTSENSUAL DREAM SPLASH 125ml'},
        {image: '#', title: 'COSMALINE HAIR AND BODYMIST FLORAL FANTASY 125ml'},
      ]
    return (
        <section className="h-[600px] my-5 flex flex-col items-center">
        <header className="text-center">
          <p className="text-3xl ">Best Selling Products</p>
          <small className="text-[#8e8e8e]">
            Easiest way to amazing life by buying your favorite products{" "}
          </small>
        </header>
       <div className="relative flex items-center justify-center gap-10 w-full mt-10  ">
       <div className="flex gap-12 w-[950px]">
       {topselling.map((item)=> 
        <div className="flex flex-col items-center flex-1 ">
          <div className="content-center w-full rounded-3xl h-[400px] bg-[#f4f6f4]">
            <img className=' mx-auto w-fit' src={item.image} alt="IMG" />
          </div>
          <div>
            <p className="mt-3 w-[90%] text-sm h-16 font-bold">{item.title}</p>
          </div>
         <div> <PinkButton text={'Learn More'}/></div>
        </div>
      )}
       </div>
       <div className="absolute right-[10%] w-20 h-10">
       <PinkButton text={'See More'}/>
       </div>
       </div>
      </section>
    );
}

export default BestSellingItems;
