import { Url } from "next/dist/shared/lib/router/router";

import { ICover } from "@/interfaces/ICover";

export class Cover implements ICover {
    public src: Url;
    public alt: string = "Book cover";
    public width: number = 179;
    public height: number = 281;

    constructor(src: Url) {
        this.src = src;
    }
}