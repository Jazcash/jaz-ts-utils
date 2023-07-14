/* eslint-disable no-restricted-imports */
import { Type } from "@sinclair/typebox";
import path from "path";

import { loadConfig, LoadConfigOptions } from "..";

describe("loadConfig", () => {
    const options: LoadConfigOptions = {
        filePath: path.join(__dirname, "./resources/config.json"),
        schema: Type.Object({
            host: Type.String(),
            port: Type.Integer(),
            advanced: Type.Object({
                title: Type.String({ minLength: 3 }),
                enabled: Type.Boolean({ default: true }),
            }),
        }),
    };

    it("can load config file", async () => {
        const config = await loadConfig(options);

        expect(config).toStrictEqual({
            host: "localhost",
            port: 1234,
            advanced: {
                title: "I am a title",
                enabled: true,
            },
        });
    });
});
