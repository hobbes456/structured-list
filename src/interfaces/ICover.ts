import { Url } from "next/dist/shared/lib/router/router";

export interface ICover {
    src: Url;
    alt: string;
    width: number;
    height: number;
}
