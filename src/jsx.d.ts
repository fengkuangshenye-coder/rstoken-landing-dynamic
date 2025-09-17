declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react/jsx-runtime';
declare module 'react-dom/client';
