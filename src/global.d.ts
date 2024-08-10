declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames

    export = classNames;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.mp4'
declare module '*.webp'
declare module "*.svg" {
    import React from "react";
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __PLATFORM__: 'desktop' | 'mobile';
declare const __IS_DEV__: boolean;

declare module '@/helpers/sum' {
    export function sum (a: number, b: number): number
}
// declare module 'sum'