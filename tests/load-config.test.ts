/* eslint-disable no-restricted-imports */
import { Type } from "@sinclair/typebox";
import path from "path";

import { loadConfig } from "..";

const configSchema = Type.Object({
    host: Type.String(),
    port: Type.Integer(),
    advanced: Type.Object({
        title: Type.String({ minLength: 3 }),
        enabled: Type.Boolean({ default: true }),
    }),
});

describe("loadConfig", () => {
    it("can load config file", async () => {
        const config = await loadConfig({
            filePath: path.join(__dirname, "./resources/config.json"),
            schema: configSchema,
        });

        expect(config).toStrictEqual({
            host: "localhost",
            port: 1234,
            advanced: {
                title: "I am a title",
                enabled: true,
            },
        });
    });

    it("can load config literal", async () => {
        const config = await loadConfig({
            schema: configSchema,
            config: {
                host: "localhost",
                port: 1234,
                advanced: {
                    title: "I am a title",
                    enabled: true,
                },
            },
        });

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
