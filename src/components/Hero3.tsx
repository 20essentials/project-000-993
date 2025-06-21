import '@/styles/Hero3.css';
import { withBase } from '@/utils/functionsTs';
const aroGrande = withBase('/assets/lightb-right-4.webp');

export function Hero3() {
  return (
    <article className='hero3 container-hero'>
      {[...Array(3).keys()].map(idx => (
        <aside className={`row row-${idx + 1}`}>
          {[...Array(3).keys()].map(n => (
            <aside className='hexagon'>
              <img
                src={withBase(`/assets/car${idx * 3 + 1 + n}.webp`)}
                alt='car image'
              />
            </aside>
          ))}
        </aside>
      ))}
      <img src={aroGrande} alt='aro' className='aro' />
      <section className='gallery'>
        {[...new Array(9).keys()].map(n => (
          <img src={withBase(`/assets/car${n + 1}.webp`)} alt='car image' />
        ))}
      </section>
    </article>
  );
}
