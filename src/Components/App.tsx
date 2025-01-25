import BestSellingItems from "../Home/BestSellingItems";
import Catagories from "../Home/Catagories";
import CustomerReviews from "../Home/CustomerReviews";
import Footer from "./Footer";
import { Header } from "./Header";
import { Hero } from "../Home/Hero";
import OurBrandsSlider from "../Home/OurBrandsSlider";
import OurStory from "../Home/OurStory";
import MainLayout from "../Layouts/MainLayout";


function App() {

  return (
    <>
<MainLayout>
  
<Hero />
      <BestSellingItems/>
      <OurBrandsSlider/>
      <Catagories/>
      <OurStory/>
      <CustomerReviews/>

</MainLayout>
    </>
  );
}










export default App;
