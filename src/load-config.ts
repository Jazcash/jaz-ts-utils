import { Static, TObject } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";

import { Optionals } from "~/types";

export type LoadConfigOptions = {
    filePath?: string;
    schema: TObject;
};

export const defaultLoadConfigOptions: Optionals<LoadConfigOptions> = {
    filePath: "config.json",
};

const ajv = new Ajv({
    coerceTypes: true,
    useDefaults: true,
});
addFormats(ajv);

/**
 * Define a config structure in JSONSchema using Typebox and then load it
 */
export async function loadConfig<T extends TObject>(options: LoadConfigOptions): Promise<Static<T>> {
    const finalOptions = Object.assign({}, defaultLoadConfigOptions, options);

    try {
        const validator = ajv.compile(finalOptions.schema);
        const configFile = await fs.promises.readFile(finalOptions.filePath, { encoding: "utf-8" });
        const config = JSON.parse(configFile);
        const isValid = validator(config);
        if (!isValid) {
            throw validator.errors;
        }
        return config as Static<T>;
    } catch (err) {
        console.error(`error loading ${options.filePath}`, err);
        throw err;
    }
}
