export const vertexShader = 
`
varying vec2 vertexUV;
varying vec3 vertexNormal;
void main()
{
   vertexUV = uv;
   vertexNormal = normalize(normal * normalMatrix);
   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`