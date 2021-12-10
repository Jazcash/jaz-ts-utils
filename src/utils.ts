export function clamp(num: number, min: number, max: number) {
    return num <= min ? min : num >= max ? max : num;
}

export function asArray<T>(target: T | T[]): T[] {
    if (Array.isArray(target)) {
        return target;
    } else {
        return [target];
    }
}

export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
export function entries<T extends object>(t: T): Entries<T>[] {
    return Object.entries(t) as any;
}

export function randomFromArray<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}