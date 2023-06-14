export type ConfigSchema = {
    [key: string]: ConfigSchema;
};

export function loadConfig<T extends ConfigSchema>(schema: T) {
    //
}
