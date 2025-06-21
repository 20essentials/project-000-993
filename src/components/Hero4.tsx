import '@/styles/Hero4.css';
import { LiteYoutube } from '@/components/LiteYoutube';
import { InstagramLogo } from '@/components/InstagramLogo';
import { Xlogo } from '@/components/Xlogo';
import { TwitchLogo } from '@/components/TwitchLogo';
import { YoutubeLogo } from '@/components/YoutubeLogo';
import { withBase } from '@/utils/functionsTs';
const thunderImg = withBase('/assets/thunder.gif');

const arrayLogos = [
  {
    Element: InstagramLogo,
    nombreDeClase: 'logo-ig',
    red: 'https://www.instagram.com/thegrefg'
  },
  {
    Element: Xlogo,
    nombreDeClase: 'logo-x',
    red: 'https://x.com/TheGrefg'
  },
  {
    Element: TwitchLogo,
    nombreDeClase: 'logo-twitch',
    red: 'https://www.twitch.tv/thegrefg'
  },
  {
    Element: YoutubeLogo,
    nombreDeClase: 'logo-youtube',
    red: 'https://www.youtube.com/channel/UCCEmjNPpJYhGDgaEqeeA4HA'
  }
];

export function Hero4() {
  return (
    <article className='hero4 container-hero'>
      <LiteYoutube />
      {arrayLogos.map(({ Element, nombreDeClase, red }) => (
        <a target='_blank' href={red} key={`key-logo-${nombreDeClase}`}>
          <Element className={`logo-social-network ${nombreDeClase}`} />
          <img src={thunderImg} alt='Thunder Gif' className={`thunder thunder-${nombreDeClase}`} />
        </a>
      ))}
    </article>
  );
}
