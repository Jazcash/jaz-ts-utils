export function roundToMultiple(num: number, multiple: number) {
    return Number((Math.round(num / multiple) * multiple).toFixed(2));
}