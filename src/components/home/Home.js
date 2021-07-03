import GlobeModel from "./GlobeModel";
import News from "./News";
import CountryInfo from "./CountryInfo";
import { motion } from "framer-motion";
import { pageVariant } from "../../assets/animation/animate";

const Home = () => {

    return (
        <motion.div className="relative grid grid-cols-12  overflow-hidden"
            variants={pageVariant}
            initial='hidden'
            animate= 'visible'
            exit='exit'
            
        >
           <GlobeModel/>
           <News/>
           <CountryInfo/>

        </motion.div>
    );
}
 
export default Home;