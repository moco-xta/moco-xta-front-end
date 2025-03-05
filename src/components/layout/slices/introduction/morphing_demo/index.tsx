// components/MorphingDemo.jsx
import { useEffect, useRef } from 'react';
import anime from 'animejs';

const MorphingDemo = () => {
  const polygonRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && polygonRef.current) {
      const anim = anime({
        targets: polygonRef.current,
        points: [
          { 
            value: [
              '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
              '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369'
            ]
          },
          { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
          { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
          { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop: true
      });

      return () => anim.pause(); // Cleanup animation
    }
  }, []);

  return (
    <div className="morphing-demo">
      <svg viewBox="0 0 150 150" width="300" height="300">
        <polygon
          ref={polygonRef}
          className="polymorph"
          points="70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369"
          fill="#FF6B6B"
        />
      </svg>
    </div>
  );
};

export default MorphingDemo;