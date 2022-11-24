import React from 'react';

import { Glitch, EffectComposer } from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import { Canvas } from '@react-three/fiber';

import { Sphere } from '@react-three/drei';

function Fiber() {
  return (
    <div className="fiber">
      <Canvas>
        <EffectComposer>
          <Glitch
            delay={[1.5, 3.5]} // min and max glitch delay
            duration={[0.6, 1.0]} // min and max glitch duration
            strength={[0.3, 1.0]} // min and max glitch strength
            mode={GlitchMode.SPORADIC} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          />
        </EffectComposer>
        <Sphere args={[2, 13, 13]} position>
          <meshBasicMaterial color="#bc75f9" />
        </Sphere>
      </Canvas>
    </div>
  );
}

export default Fiber;
