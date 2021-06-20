import {vertexShader} from './shaders/vertex';
import {fragmentShader} from './shaders/fragment';
import * as THREE from 'three';
const Atmosphere = () => {
    return (
        <mesh>
            <sphereGeometry args={[3,100,100]} scale={[1.1,1.1,1.1]}/>
            <shaderMaterial 
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                blending={THREE.AdditiveBlending}
                side={THREE.BackSide}
            />
        </mesh>
    );
}
 
export default Atmosphere;