import { Url } from "next/dist/shared/lib/router/router";

export const isValidUrl = (path: string): Url | boolean => {
    try {
        return !!new URL(path);
    } catch (_) {
        return false;
    }
};
