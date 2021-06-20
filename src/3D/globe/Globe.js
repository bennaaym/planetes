import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { vertexShader } from './shaders/vertex';
import { fragmentShader } from './shaders/fragment';
import Countries from '../countries/Countries';
import GlobeContextProvider from '../../contexts/GlobeContext';


const Globe = () => {

    const globeSpeed = useRef(0.005);
    const globeMesh = useRef(null);
    const [globeTexture] = useTexture(['3D/assets/globe.jpg']);

    useFrame(()=>{
        globeMesh.current.rotation.y += globeSpeed.current;
    })

    //const handlePointerOver = () => globeSpeed.current =  0;
    //const handlePointerOut = () => globeSpeed.current = 0.005;

    return (
        <GlobeContextProvider>
            <mesh 
                ref={globeMesh}
            >
                <sphereGeometry args={[2.5,100,100]}/>
                <shaderMaterial 
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={{
                        globeTexture:{
                            value:globeTexture
                        }
                    }}
                />
                <Countries globeSpeed={globeSpeed}/>
            </mesh>
        </GlobeContextProvider>
    );
}
 
export default Globe;