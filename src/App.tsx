import SearchImage from "./assets/search_3691570.png";
import ShoppingCartImage from "./assets/shopping-cart_5254037.png";
import ThreeLinesIMG from "./assets/three-lines_8385288.png";

function App() {
  const menuItems = ["Home", "Products", "Contacts"];
  const images = [
    { src: ShoppingCartImage, alt: "Shopping Cart" },
    { src: SearchImage, alt: "Search" },
    { src: ThreeLinesIMG, alt: "List" },
  ];

  return (
    <>
      <div className="text-center bg-[#d8d8d8]">
        Free delivery in lebanon for orders above $30
      </div>
      <header className="mt-20 w-[90%] mx-auto h-screen ">
        <div className="flex justify-between pb-6 items-center w-[95%] mx-auto">
          <p className="text-5xl font-extralight">Cosmaline</p>
          <ul className="flex gap-20 w-fit h-fit font-semibold">
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex gap-1">
            {images.map((image, index) => (
              <div key={index} className={index === 1 ? "border-r-2 border-black pr-2" : ""}>
                <img src={image.src} className="h-10" alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
        <hr className="border-black" />
        <div>

        </div>
      </header>
      
    </>
  );
}

export default App;
