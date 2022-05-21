import { DeepReadonly, objectKeys } from ".";

export function deepFreeze<T>(obj: T) : DeepReadonly<T> {
    objectKeys(obj).forEach((prop) => {
        if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
            deepFreeze(obj[prop]);
        }
    });
    return Object.freeze(obj) as DeepReadonly<T>;
}