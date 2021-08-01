export function isArrayOfStrings(x: any[]): boolean {
    return x.every(i => (typeof i === "string"));
}