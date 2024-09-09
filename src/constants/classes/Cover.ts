import { Url } from "next/dist/shared/lib/router/router";

import { ICover } from "@/interfaces/ICover";

export class Cover implements ICover {
    public src: Url;
    public width: number = 180;
    public height: number = 280;

    constructor(src: Url) {
        this.src = src;
    }
}
