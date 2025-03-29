import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useAnimations, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export default function ReelScene() {
  const group = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF(glbConstants.INTRODUCTION.REEL_PLANE);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions['Key.001Action.002']; // Replace with your animation name
    if (!action) return;
  
    // Set the animation to pause initially
    action.play();
    action.paused = true;
  
    // Create a GSAP timeline for the animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#reel_canvas', // Replace with the ID of your scroll trigger element
        start: 'top center', // When the trigger element hits the center of the viewport
        end: 'bottom center', // When the trigger element leaves the viewport
        scrub: true, // Smoothly scrub through the animation
        markers: true,
        onUpdate: (self) => {
          // Update the animation progress based on scroll
          action.time = action.getClip().duration * self.progress;
        },
      },
    });
  
    return () => {
      timeline.kill(); // Clean up the timeline on unmount
    };
  }, [actions]);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
