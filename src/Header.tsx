import SearchImage from "./assets/search_3691570.png";
import ShoppingCartImage from "./assets/shopping-cart_5254037.png";
import ThreeLinesIMG from "./assets/three-lines_8385288.png";
export const Header = () => {
    const menuItems = ["Home", "Products", "Contacts"];
    const images = [
      { src: ShoppingCartImage, alt: "Shopping Cart" },
      { src: SearchImage, alt: "Search" },
      { src: ThreeLinesIMG, alt: "List" },
    ];
    return (
      <>
        {" "}
        <div className="text-center bg-[#d8d8d8]">
          Free delivery in lebanon for orders above $30
        </div>{" "}
        <header className="mt-20 w-[90%] mx-auto ">
          <nav>
            <div className="flex justify-between pb-6 items-center w-[95%] mx-auto">
              <p className="text-5xl font-extralight">Cosmaline</p>
  
              <ul className="flex text-xl gap-20 w-fit h-fit ">
                {menuItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
  
              <div className="flex gap-1">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={index === 1 ? "border-r border-black pr-3" : ""}
                  >
                    <img src={image.src} className="h-10" alt={image.alt} />
                  </div>
                ))}
              </div>
            </div>
            <hr className="border-black" />
          </nav>
        </header>
      </>
    );
  };