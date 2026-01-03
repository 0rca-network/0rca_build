"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";

interface SilkProps {
    speed?: number;
    scale?: number;
    color?: string;
    noiseIntensity?: number;
    rotation?: number;
}

export default function Silk({
    speed = 1,
    scale = 1,
    color = "#3e47c1",
    noiseIntensity = 1.5,
    rotation = 0,
}: SilkProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const renderer = new Renderer({ alpha: true, dpr: 2 });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);

        const container = containerRef.current;
        container.appendChild(gl.canvas);

        function resize() {
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        }
        window.addEventListener("resize", resize);
        resize();

        const geometry = new Triangle(gl);

        const vertex = /* glsl */ `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
      }
    `;

        const fragment = /* glsl */ `
      precision highp float;
      uniform float uTime;
      uniform vec3 uColor;
      uniform float uSpeed;
      uniform float uScale;
      uniform float uNoiseIntensity;
      uniform float uRotation;
      varying vec2 vUv;

      // Simplex 2D noise
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = vUv;
        
        // Rotation
        float c = cos(uRotation);
        float s = sin(uRotation);
        mat2 rot = mat2(c, -s, s, c);
        uv = (uv - 0.5) * rot + 0.5;

        // Noise flow
        float time = uTime * uSpeed * 0.2;
        float noise = snoise(uv * uScale * 3.0 + vec2(time, time * 0.5));
        
        // Domain warping for silk effect
        float n2 = snoise(uv * uScale * 2.0 + vec2(noise * uNoiseIntensity, time));
        
        // Intensity pattern
        float pattern = 0.5 + 0.5 * sin(uv.y * 10.0 + n2 * 5.0 + time * 2.0);
        
        // Mix with color
        vec3 finalColor = uColor * (0.5 + 0.5 * n2);
        
        // Add some transparency/glow
        float alpha = 0.3 + 0.7 * pattern;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new Color(color) },
                uSpeed: { value: speed },
                uScale: { value: scale },
                uNoiseIntensity: { value: noiseIntensity },
                uRotation: { value: rotation },
            },
            transparent: true,
        });

        const mesh = new Mesh(gl, { geometry, program });

        let animationId: number;
        function update(t: number) {
            animationId = requestAnimationFrame(update);
            program.uniforms.uTime.value = t * 0.001;
            renderer.render({ scene: mesh });
        }
        animationId = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            if (container.contains(gl.canvas)) {
                container.removeChild(gl.canvas);
            }
            gl.getExtension("WEBGL_lose_context")?.loseContext();
        };
    }, [speed, scale, color, noiseIntensity, rotation]);

    return <div ref={containerRef} className="w-full h-full" />;
}
