import BestSellingItems from "./BestSellingItems";
import Catagories from "./Catagories";
import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import OurBrandsSlider from "./OurBrandsSlider";
import OurStory from "./OurStory";


function App() {

  return (
    <>
      <Header />
      <Hero />
      <BestSellingItems/>
      <OurBrandsSlider/>
      <Catagories/>
      <OurStory/>
      <CustomerReviews/>
      <Footer/>
    </>
  );
}










export default App;
