import GlobeModel from "./GlobeModel";
import News from "./News";
import CountryInfo from "./CountryInfo";

const Home = () => {
    return (
        <div className="relative grid grid-cols-12 overflow-hidden">
           <GlobeModel/>
           <News/>
           <CountryInfo/>

        </div>
    );
}
 
export default Home;