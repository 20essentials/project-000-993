/// <reference types="vite/client" />
/// <reference types="react" />

declare namespace JSX {
  interface IntrinsicElements {
    'lite-youtube': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      videoid: string;
      playlabel?: string;
      params?: string;
      autoplay?: boolean;
      nocookie?: boolean;
    };
  }
}
