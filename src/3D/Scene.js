import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Globe from './globe/Globe';
import Atmosphere from './atmosphere/Atmosphere';



const Scene = () => {
    return (
      <Canvas>
          <Suspense fallback={null}>
            <OrbitControls
                enablePan={false}
                enableRotate ={false}
                minDistance={4.5}
                maxDistance={4.5}
            />
            
            <Atmosphere/>
            <Globe/>
          </Suspense>  
      </Canvas>
    );
}
 
export default Scene;