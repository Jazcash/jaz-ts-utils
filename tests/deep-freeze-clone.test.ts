/* eslint-disable no-restricted-imports */
import { deepFreeze } from "../src/collection";

const obj = [{ name: "bob", address: { line1: "thing" } }];

it("deepFreeze", () => {
    deepFreeze(obj);

    expect(() => {
        obj[0].address.line1 = "stuff";
    }).toThrow();

    expect(obj[0].address.line1).toBe("thing");
});

// it("clone", () => {
//     const frozenObj = deepFreeze(obj);

//     const clonedObj = clone(frozenObj);

//     clonedObj[0].address.line1 = "yep";

//     expect(clonedObj[0].address.line1).toBe("yep");
// });
