import { useGalleryStore } from '@/store/useGalleryStore';
import '@/styles/Hero3.css';
import { withBase } from '@/utils/functionsTs';
import { useEffect, useRef } from 'react';
const aroGrande = withBase('/assets/lightb-right-4.webp');

export function Hero3() {
  const openGallery = useGalleryStore(state => state.openGallery);
  const setGalleryRef = useGalleryStore(state => state.setGalleryRef);
  const galleryRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    setGalleryRef({ galleryRef: galleryRef.current });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className='hero3 container-hero'>
      {[...Array(3).keys()].map(idx => (
        <aside className={`row row-${idx + 1}`} key={crypto.randomUUID()}>
          {[...Array(3).keys()].map(n => {
            const currentIndex = idx * 3 + 1 + n;
            return (
              <aside
                className='hexagon'
                onClick={() => openGallery({currentIndex: currentIndex - 1})}
                key={crypto.randomUUID()}
              >
                <img
                  src={withBase(`/assets/car${currentIndex}.webp`)}
                  alt='car image'
                />
              </aside>
            );
          })}
        </aside>
      ))}
      <img src={aroGrande} alt='aro' className='aro' />
      <section ref={galleryRef} className='gallery'>
        {[...new Array(9).keys()].map(n => (
          <img
            key={crypto.randomUUID()}
            src={withBase(`/assets/car${n + 1}.webp`)}
            alt='car image'
          />
        ))}
      </section>
    </article>
  );
}
