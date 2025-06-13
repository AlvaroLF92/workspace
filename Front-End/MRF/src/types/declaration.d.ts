declare module '*.svg' {
  const src: string;
  export default src;
}

declare module "*.png" {
  const value: string;
  export default value;
}


declare global {
 interface Window {
    bootstrap: typeof import("bootstrap");
  }
}

export {}