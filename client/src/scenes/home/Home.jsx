import { Carousel } from "react-responsive-carousel";
import ShoppingList from "./ShoppingList";
import MainCarousel from "./MainCarousel";
import Subscribe from "./Subscribe";

const Home = () => {
    return (
        <div>
            <MainCarousel/>
            <ShoppingList/>
            <Subscribe/>
        </div>
    )
}

export default Home;