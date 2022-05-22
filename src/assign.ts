import { SetUndefinedValues } from "./types";

export function assign<T>(target: T, source: SetUndefinedValues<T>) {
    for (const key in source) {
        if (source[key] !== undefined) {
            target[key] = source[key]!;
        }
    }

    return target;
}
