export type MinMax = {
    min: number;
    max: number;
}

export type EvoRange = MinMax | [number, number];

export interface DefinedRange extends MinMax {
    rangeSize: number;
    stepSize: number;
}

export type TransitionFunction = (value: number, own?: Evolution) => number;

export type Transition = "linear" | "easeInOut";

export interface Evolution {
    initial: number;
    input: EvoRange;
    output: EvoRange;
    method: Transition | TransitionFunction;
}

export interface DefinedEvolution {
    initial: number;
    input: MinMax;
    output: MinMax;
    method: TransitionFunction;
}