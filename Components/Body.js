import ClientStory from "./ClientStory";
import Hero from "./Hero";
import Meet from "./Meet";
import Mission from "./Mission";
import Navbar from "./Navbar";

const Body = () => {
    return(<div>
        <Navbar />
        <Hero />
        <Mission />
        <Meet/>
        <ClientStory/>
    </div>)
};

export default Body;