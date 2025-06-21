import '@/styles/Hero4.css';
import { LiteYoutube } from '@/components/LiteYoutube';
import { InstagramLogo } from '@/components/InstagramLogo';
import { Xlogo } from '@/components/Xlogo';
import { TwitchLogo } from '@/components/TwitchLogo';
import { YoutubeLogo } from '@/components/YoutubeLogo';

const arrayLogos = [
  {
    Element: InstagramLogo
  },
  {
    Element: Xlogo
  },
  {
    Element: TwitchLogo
  },
  {
    Element: YoutubeLogo
  }
];

export function Hero4() {
  return (
    <article className='hero4 container-hero'>
      <LiteYoutube />
      {arrayLogos.map(({ Element }) => (
        <Element className='logo-social-network' />
      ))}
    </article>
  );
}
