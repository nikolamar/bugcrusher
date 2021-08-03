export function setStorage(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage<T>(key: string): T | void {
    const value = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}