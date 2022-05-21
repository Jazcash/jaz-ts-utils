
import { deepFreeze } from "../src/deep-freeze";

it("deepFreeze", () => {
    const obj = [{ name: "bob", address: { line1: "thing" } }];

    deepFreeze(obj);

    expect(() => {
        obj[0].address.line1 = "stuff";
    }).toThrow();

    expect(obj[0].address.line1).toBe("thing");
});