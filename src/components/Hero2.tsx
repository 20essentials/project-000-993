import '@/styles/Hero2.css';
import { withBase } from '@/utils/functionsTs';
import { StackCard } from '@/components/StackCard';
const grefgVertical = withBase('/assets/grefg-coche-vertical-6.webp');
const lightLeftVertical = withBase('/assets/light-vertical-left-7.webp');
const lightRightVertical = withBase('/assets/light-vertical-right-8.webp');
const infoCards = [
  {
    title: '¿Cuantas veces puedo participar?',
    paragraph:
      'Puedes comprar tantas veces como quieras los fondos de pantalla y, por cada compra, tendrás una participación gratuita para ganar el coche.'
  },
  {
    title: '¿Quien puede participar?',
    paragraph:
      '¡Todo el mundo! No importa de donde seas, puedes participar desde cualquier parte del planeta. O sino te entregaremos el valor actual del coche.'
  },
  {
    title: '¿Hasta cuando se puede participar?',
    paragraph:
      'Tienes del 25 de diciembre hasta el 6 de enero a las 23:59:59 (hora peninsular Española) para conseguir tus participaciones.'
  }
];

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
          <h3 className='titulin'>¿Como funciona el sorteo?&nbsp;</h3>
          {infoCards.map((prop, i) => (
            <StackCard {...prop} key={i}/>
          ))}
        </section>
      </aside>
    </article>
  );
}
