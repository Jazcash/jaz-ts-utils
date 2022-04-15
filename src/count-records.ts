export function countRecords<T extends Record<string, string | number>, K extends keyof T, V extends T[K]>(arr: T[], key: K) : Record<V, number> {
    const counts: any = {};
    for (const entry of arr) {
        const val = entry[key];
        if (val !== undefined) {
            const key = val.toString();
            counts[key] ? counts[key]++ : counts[key] = 1;
        }
    }
    return counts;
}