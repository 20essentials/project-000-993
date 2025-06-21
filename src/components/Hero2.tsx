import '@/styles/Hero2.css';
import { withBase } from '@/utils/functionsTs';
const grefgVertical = withBase('/assets/grefg-coche-vertical-6.webp');
const lightLeftVertical = withBase('/assets/light-vertical-left-7.webp');
const lightRightVertical = withBase('/assets/light-vertical-right-8.webp');

export function Hero2() {
  return (
    <article className='hero2 container-hero'>
      <aside className='aside-in-hero aside-left'>
        <section className='container-img-vertical'>
          <img
            className='gref-vertical'
            src={grefgVertical}
            alt='Gref Vertical Image'
          />
          <img
            className='light-img left-light-vertical'
            src={lightLeftVertical}
            alt='leftLight Vertical Image'
          />
          <img
            className='light-img right-light-vertical'
            src={lightRightVertical}
            alt='rightLight Vertical Image'
          />
        </section>
      </aside>
      <aside className='aside-in-hero aside-right'>
        <section className='container-content'>
          <h3>¿Como funciona el sorteo?</h3>
        </section>
      </aside>
    </article>
  );
}
