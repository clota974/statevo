import { DefinedRange } from "../types/evolution.interface";

export default function normalize(range: DefinedRange, value: number): number {
    return (value - range.min) / range.rangeSize;
}   