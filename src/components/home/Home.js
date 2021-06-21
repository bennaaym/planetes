import GlobeModel from "./GlobeModel";
import News from "./News";
import CountryInfo from "./CountryInfo";

const Home = () => {
    return (
        <div className="grid grid-cols-12 relative">
           <GlobeModel/>
           <News/>
           <CountryInfo/>

        </div>
    );
}
 
export default Home;