import { DefinedRange, EvoRange } from "../types/evolution.interface";

export default function describeRange(range: EvoRange) {
    const [min, max] = Array.isArray(range) ? range : [range.min, range.max];
    const rangeSize = max - min;
    return {
        min,
        max,
        rangeSize,
        stepSize: 100 / rangeSize,
    };
}

export function range(min: number, max: number): DefinedRange {
    return describeRange([min, max]);
}