import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    verbose: false,
    coveragePathIgnorePatterns: ["working-files"],
    modulePathIgnorePatterns: ["working-files"],
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
export default config;
