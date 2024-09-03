export const isValidUrl = (path: string) => {
    try {
        return !!new URL(path);
    } catch (_) {
        return false;
    }
};
