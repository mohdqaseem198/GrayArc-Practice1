import ClientStory from "./ClientStory";
import Hero from "./Hero";
import IndustryFocused from "./IndustryFocused";
import Meet from "./Meet";
import Mission from "./Mission";
import Navbar from "./Navbar";
import Transformation from "./Transformation";

const Body = () => {
    return(<div>
        <Navbar />
        <Hero />
        <IndustryFocused />
        <Mission />
        <Meet/>
        <ClientStory/>
        <Transformation />
    </div>)
};

export default Body;