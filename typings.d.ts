import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extend the HTMLAttributes interface with the 'marquee' attribute
    marquee?: marque;
  }
}
