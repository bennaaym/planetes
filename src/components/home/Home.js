import GlobeModel from "./GlobeModel";
import News from "./News";

const Home = () => {
    return (
        <div className="grid grid-cols-12 min-h-full">
           <GlobeModel/>
           <News/>
        </div>
    );
}
 
export default Home;