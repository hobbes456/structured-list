export interface IFetchOption {
    method: "POST" | "DELETE" | "PUT" | "GET";
    body?: BodyInit | null;
}
