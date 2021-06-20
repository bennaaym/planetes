import { useTexture } from "@react-three/drei";
import {vertexShader} from './shaders/vertex.js';
import {fragmentShader} from './shaders/fragment.js';
const Globe = () => {

    const [globeTexture] = useTexture(['3D/assets/globe.jpg']);

    return (
        <mesh>
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
        </mesh>
    );
}
 
export default Globe;