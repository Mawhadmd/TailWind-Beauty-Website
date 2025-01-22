//TODO INCOMPLETE

const OurBrandsSlider = () => {
    var brands = [
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
        {image: '#'},
    ]
    
    return (
        <>
        <div  id="slider" className="w-full  gap-2 my-20 whitespace-nowrap overflow-x-hidden ">
            {brands.map(()=> 
            <div  className="size-32 mx-1 inline-block bg-[#f4f6f4]  rounded-2xl">
                
            </div>
            )}
        </div>
       
    </>
    );
}

export default OurBrandsSlider;
