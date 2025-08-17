import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <ShaderGradientCanvas>
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=0.9&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%232A2A72&color2=%2364FEDA&color3=%2300FFFF&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=30&frameRate=10&grain=on&lightType=3d&pixelDensity=0.9&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=0.5&uFrequency=5.5&uSpeed=0.1&uStrength=1.5&uTime=0.2&wireframe=false"
        />
      </ShaderGradientCanvas>
    </div>
  );
}
