export function asArray<T>(target: T | T[]): T[] {
    if (Array.isArray(target)) {
        return target;
    } else {
        return [target];
    }
}

export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
// eslint-disable-next-line @typescript-eslint/ban-types
export function entries<T extends object>(t: T): Entries<T>[] {
    return Object.entries(t) as Entries<T>[];
}

export const objectKeys = Object.keys as <T>(o: T) => (Extract<keyof T, string>)[];

export function randomFromArray<T>(arr: T[]): T | undefined {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function lastInArray<T>(target: T[]): T | undefined {
    return target[target.length - 1];
}

export function firstInArray<T>(target:T[]): T | undefined {
    return target[0];
}

export function removeFromArray<T>(target: T[], item: T): T[] {
    const index = target.indexOf(item);
    if (index > -1) {
        target.splice(index, 1);
    }
    return target;
}

export function shuffle<T>(array: Readonly<T[]>): T[] {
    const arrayCopy = array.slice();

    let currentIndex = arrayCopy.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [arrayCopy[randomIndex], arrayCopy[currentIndex]];
    }

    return arrayCopy;
}

// https://stackoverflow.com/a/62765924/1864403
// Remove this when groupBy is available in TS https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupBy
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
    list.reduce((previous, currentItem) => {
        const group = getKey(currentItem);
        if (!previous[group]) previous[group] = [];
        previous[group].push(currentItem);
        return previous;
    }, {} as Record<K, T[]>);