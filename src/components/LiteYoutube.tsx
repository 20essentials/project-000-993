import '@/styles/LiteYoutube.css';
import { withBase } from '@/utils/functionsTs';
import '@justinribeiro/lite-youtube';
import React from 'react';

const portadaVideo = withBase('/assets/portada-video-9.webp');

export function LiteYoutube() {
  return (
    <article className='lite-youtube'>
      <h1>¡No te pierdas el Video!</h1>
      <section className='container-lite-youtube'>
        {/* <lite-youtube
          videotitle='This is a video title'
          videoid='AEHzLohXVQc'
        ></lite-youtube> */}
        {React.createElement('lite-youtube', {
          videoid: 'AEHzLohXVQc'
        })}
        <img className='before-video' src={portadaVideo} alt='Portada Video' />
      </section>
    </article>
  );
}
