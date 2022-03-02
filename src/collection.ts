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

export function lastInArray<T>(target: T[]): T {
    return target[target.length - 1];
}

export function firstInArray<T>(target:T[]): T {
    return target[0];
}

export function removeFromArray<T>(target: T[], item: T): T[] {
    const index = target.indexOf(item);
    if (index > -1) {
        target.splice(index, 1);
    }
    return target;
}