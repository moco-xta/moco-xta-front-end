import React from 'react'

export default function NewVideoDeform() {
  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id='wave'>
          <feTurbulence
            type='type'
            baseFrequency='0.02'
            numOctaves='2'
            result='warp'
          />
          <feDisplacementMap
            in='SourceGraphic'
            in2='warp'
            scale='30'
          />
        </filter>
      </svg>
      <video
        id='video'
        src='/videos/test.mp4'
        /* autoplay */ loop playsInline
        style={{ filter: 'url(#wave)' }}
      />
    </>
  )
}
