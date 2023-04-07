/* eslint-disable no-restricted-imports */
import { delay } from "..";

describe("delay function", () => {
    it("should resolve after specified time", async () => {
        const start = Date.now();
        await delay(100);
        const end = Date.now();
        expect(end - start).toBeGreaterThanOrEqual(100);
    });

    it("should abort when abort signal is fired", async () => {
        const abortController = new AbortController();
        const abortSignal = abortController.signal;
        setTimeout(() => abortController.abort(), 50);
        await expect(delay(1000, abortSignal)).rejects.toThrow("Delay aborted");
    });
});
