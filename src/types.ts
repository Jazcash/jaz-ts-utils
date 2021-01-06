export type Exclusive<A extends object, B extends object> = Omit<A, keyof B> & Omit<B, keyof A>;
export type Inclusive<A extends object, B extends object> = Omit<A & B, keyof Exclusive<A, B>>;
export type Merge<A extends object, B extends object> = Inclusive<A, B> & Partial<Exclusive<A, B>>;