import { useContext ,Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Globe from './globe/Globe';
import Atmosphere from './atmosphere/Atmosphere';
import { GlobeContext } from "../contexts/GlobeContext";




const Scene = () => {
    const {data,setCurrentCountry} = useContext(GlobeContext);

    return (
      <Canvas>
          <Suspense fallback={null}>
            <OrbitControls
                enablePan={false}
                enableRotate ={true}
                minDistance={4.5}
                maxDistance={4.5}
            />
            
            <Atmosphere/>
            <Globe data={data} setCurrentCountry={setCurrentCountry}/>
          </Suspense>  
      </Canvas>
    );
}
 
export default Scene;