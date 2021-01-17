export type Exclusive<A extends object, B extends object> = Omit<A, keyof B> & Omit<B, keyof A>;
export type Inclusive<A extends object, B extends object> = Omit<A & B, keyof Exclusive<A, B>>;
export type Merge<A extends object, B extends object> = Inclusive<A, B> & Partial<Exclusive<A, B>>;

export type OptionalPropertiesOf<T extends object> = Exclude<{ [K in keyof T]: T extends Record<K, T[K]> ? never : K }[keyof T], undefined>;
export type Optionals<T extends object> = Pick<T, OptionalPropertiesOf<T>>;