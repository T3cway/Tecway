/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { forwardRef, useRef, useMemo, useLayoutEffect, useState, useEffect } from "react";
import { Color } from "three";

const hexToNormalizedRGB = (hex) => {
  hex = hex.replace("#", "");
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255,
  ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

const SilkPlane = forwardRef(function SilkPlane({ uniforms }, ref) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_, delta) => {
    if (ref.current && ref.current.material) {
      // Throttle animation for better performance
      ref.current.material.uniforms.uTime.value += 0.08 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

const Silk = ({
  speed = 5,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
}) => {
  const meshRef = useRef();

  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  return (
    <Canvas 
      dpr={[1, 1.5]} 
      frameloop="always"
      performance={{ min: 0.5 }}
      gl={{ 
        antialias: false,
        alpha: true,
        powerPreference: "high-performance"
      }}
    >
      <SilkPlane ref={meshRef} uniforms={uniforms} />
    </Canvas>
  );
};

const AnimatedHero = ({
  headline,
  subtitle,
  buttons,
  trustBadge,
  speed = 7,
  scale = 1,
  color = "#C1540A",
  noiseIntensity = 1.5,
  rotation = 0,
  className = "",
}) => {
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = null;
    let ticking = false;

    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const heroHeight = heroRect.height;
      const heroTop = heroRect.top;
      
      // Calculate scroll progress: 0 when hero is fully visible, 1 when completely scrolled past
      // The curtain starts moving immediately when user scrolls
      const scrollEnd = heroHeight; // Complete effect when hero is fully scrolled past
      
      // Calculate how much of the hero has been scrolled
      const scrolled = Math.max(0, -heroTop);
      const progress = Math.min(1, scrolled / scrollEnd);
      
      setScrollProgress(progress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    // Initial call
    handleScroll();
    
    // Listen to scroll and resize events
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Calculate transform based on scroll progress
  // As user scrolls down, curtain moves up (negative translateY)
  // Maximum movement: -100% (fully raised)
  const translateY = -scrollProgress * 100;
  const opacity = Math.max(0, 1 - scrollProgress * 1.2); // Fade out as curtain raises

  return (
    <div
      ref={heroRef}
      className={`relative w-full h-screen overflow-hidden bg-black ${className}`}
    >
      {/* Animated Shader Background - Curtain effect with scroll-based transform */}
      <div 
        className="absolute inset-0 blur-[29px] will-change-transform"
        style={{
          transform: `translateY(${translateY}%)`,
          opacity: opacity,
        }}
      >
        <Silk
          speed={speed}
          scale={scale}
          color={color}
          noiseIntensity={noiseIntensity}
          rotation={rotation}
        />
      </div>

      {/* Text Content Overlay */}
      {(headline || subtitle || buttons || trustBadge) && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
          {/* Trust Badge */}
          {trustBadge && (
            <div className=" max-sm:hidden mb-8 animate-fade-in-down">
              <div className="flex items-center gap-2 px-6 py-3 bg-orange-500/10 backdrop-blur-md border border-orange-300/30 rounded-full text-sm">
                {trustBadge.icons && (
                  <div className="flex">
                    {trustBadge.icons.map((icon, index) => (
                      <span
                        key={index}
                        className={`text-${index === 0 ? "yellow" : index === 1 ? "orange" : "amber"}-300`}
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                )}
                <span className="text-orange-100">{trustBadge.text}</span>
              </div>
            </div>
          )}

          <div className="text-center space-y-6 max-w-5xl mx-auto px-4">
            {/* Main Heading */}
            {headline && (
              <div className="space-y-2">
                {headline.line1 && (
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-light animate-headline-slide-up headline-delay-100">
                    {headline.line1}
                  </h1>
                )}
                {headline.line2 && (
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-light animate-headline-slide-up headline-delay-300">
                    {headline.line2.split(/(\s+)/).map((part, index) => {
                      // Check if this part is the word "Technology" (case-insensitive, but preserve original case)
                      if (part.trim().toLowerCase() === 'technology' && part.trim() !== '') {
                        return (
                          <span key={index} className="font-monsieur">
                            {part}
                          </span>
                        );
                      }
                      return <span key={index}>{part}</span>;
                    })}
                  </h1>
                )}
              </div>
            )}

            {/* Subtitle */}
            {subtitle && (
              <div className="max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
                <p className="text-lg md:text-xl lg:text-xl text-orange-100/90 font-light leading-relaxed">
                  {subtitle}
                </p>
              </div>
            )}

            {/* CTA Buttons */}
            {buttons && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up animation-delay-800">
                {buttons.primary && (
                  <button
                    onClick={buttons.primary.onClick}
                    className="px-8 py-4 bg-orange-500 cursor-pointer border border-orange-500  rounded-full font-semibold text-base  transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25"
                  >
                    {buttons.primary.text}
                  </button>
                )}
                {buttons.secondary && (
                  <button
                    onClick={buttons.secondary.onClick}
                    className="px-8 py-4 cursor-pointer bg-orange-500/10 hover:bg-orange-500/20 border border-orange-300/30 hover:border-orange-300/50 text-orange-100 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    {buttons.secondary.text}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedHero;
