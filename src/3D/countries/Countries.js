import { useContext } from "react";
import { GlobeContext } from "../../contexts/GlobeContext";
import { vertexShader } from "./shaders/vertex";
import { fragmentShader } from "./shaders/fragment";
import * as THREE from 'three';


const Countries = ({globeSpeed}) => {
    
    const {data} = useContext(GlobeContext);

    const geoCoordsToSphericalCoords = (geoCoords) =>{

        /* transform geographic coordinates into spherical coordinates */

        const latitude = geoCoords.latitude * (Math.PI / 180);
        const longitude = geoCoords.longitude * (Math.PI / 180);
        const radius = 2.5

        return {
            x : radius * Math.cos(latitude) * Math.cos(longitude),
            y : radius * Math.sin(latitude),
            z : radius * Math.cos(latitude) * Math.sin(longitude),
            latitude,
            longitude,
        }
    }

    const handlePointerOver = (event) =>{
        //const country = event.eventObject.userData;
        globeSpeed.current = 0;
    }

    const handlePointerOut = (event) =>{
        globeSpeed.current = 0.005;
    }
    return (
        <>
           {
                data && 
                data.map((country,index)=>{
                    const {x,y,z,latitude,longitude} = geoCoordsToSphericalCoords(country.coord)
                    return(
                        <mesh 
                            key={index}
                            position={[x,y,z]}
                            rotation={[0.0,-longitude,latitude-(Math.PI * 0.5)]}
                            userData={country}

                            onPointerOver={handlePointerOver}
                            onPointerOut={handlePointerOut}
                        >
                            <cylinderGeometry args={[0.025,0.05,Math.random() * 0.5 + 0.1,3]}/>
                            <shaderMaterial
                                vertexShader= {vertexShader}
                                fragmentShader= {fragmentShader}
                                blending = {THREE.AdditiveBlending}
                            />
                        </mesh>
                    )
                })
            }
        </>
    );
}
 
export default Countries;