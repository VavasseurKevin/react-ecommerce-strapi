import { Carousel } from "react-responsive-carousel";
import ShoppingList from "./ShoppingList";
import MainCarousel from "./MainCarousel";

const Home = () => {
    return (
        <div>
            <MainCarousel/>
            <ShoppingList/>
        </div>
    )
}

export default Home;