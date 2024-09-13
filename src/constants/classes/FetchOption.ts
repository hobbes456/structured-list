import { IFetchOption } from "@/interfaces/IFetchOption";

export class FetchOption implements IFetchOption {
    public method: "POST" | "DELETE" | "PUT" | "GET";
    public body?: BodyInit | null;

    constructor(method: "POST" | "DELETE" | "PUT" | "GET", data: any) {
        this.method = method;
        this.body = JSON.stringify(data);
    }
}
