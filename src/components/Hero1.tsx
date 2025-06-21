import '@/styles/Hero1.css';
import { withBase } from '@/utils/functionsTs';
import { ButtonDownload } from '@/components/ButtonDownload';
import { LuxuryButton } from './LuxuryButton';
const carGrefgImage = withBase('/assets/car-grefg-3.webp');
const lightRigth = withBase('/assets/lightb-right-4.webp');

export function Hero1() {
  return (
    <article className='hero1 container-hero'>
      <aside className='container-inner container-inner-left'>
        <section className='container-content'>
          <LuxuryButton />
          <h3>¡El coche de TheGrefg puede ser tuyo!</h3>
          <p>
            Compra 2 wallpapers exclusivos y consigue tu participación para el
            sorteo del coche de TheGrefg.
          </p>
          <ButtonDownload />
        </section>
      </aside>
      <aside className='container-inner container-inner-right'>
        <img className='img' src={carGrefgImage} alt='Car Grefg Wallpaper' />
        <img
          className='light-image-right'
          src={lightRigth}
          alt='Light Right Image'
        />
      </aside>
    </article>
  );
}
