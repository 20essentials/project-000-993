import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const INITIAL_STATE = {
  galleryRef: document.createElement('section')
};

export const useGalleryStore = create(
  combine(INITIAL_STATE, (set, get) => ({
    openGallery: ({ currentIndex }: { currentIndex: number }) => {
      const { galleryRef } = get();
      galleryRef.classList?.add('open-gallery');

      setTimeout(() => {
        const childrensGallery = [...galleryRef.children];
        const currentImg = childrensGallery[currentIndex];
        currentImg.scrollIntoView({ behavior: 'smooth', inline: 'end' });
      }, 1000);
    },
    setGalleryRef: ({ galleryRef }: { galleryRef: HTMLElement | null }) => {
      if (galleryRef == null) return;
      set({ galleryRef });
    },
    closeGallery: () => {
      const { galleryRef } = get();
      galleryRef.classList?.remove('open-gallery');
    }
  }))
);
