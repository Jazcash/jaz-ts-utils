/* eslint-disable no-restricted-imports */
import { Signal } from "..";

it("add", () => {
    const signal = new Signal<number>();

    signal.add((value) => {
        expect(value).toBe(5);
    });

    setTimeout(() => {
        signal.dispatch(5);
    }, 100);
});

it("addOnce", () => {
    const signal = new Signal<number>();

    const fn = jest.fn();
    signal.addOnce(fn);

    setTimeout(() => {
        signal.dispatch(5);
        setTimeout(() => {
            signal.dispatch(10);
            expect(fn).toHaveBeenCalledTimes(1);
        }, 100);
    }, 100);
});
