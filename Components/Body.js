import ClientStory from "./ClientStory";
import Hero from "./Hero";
import Meet from "./Meet";
import Mission from "./Mission";
import Navbar from "./Navbar";
import Transformation from "./Transformation";

const Body = () => {
    return(<div>
        <Navbar />
        <Hero />
        <Mission />
        <Meet/>
        <ClientStory/>
        <Transformation />
    </div>)
};

export default Body;