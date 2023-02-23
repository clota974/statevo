import describeRange from "./describeRange";
import transitions from "./transitions";
import { Evolution } from "../types/evolution.interface";
import normalize from "./normalize.util";

export default function describeEvolution(evolution: Evolution) {
    const { initial, input, output, method } = evolution;

    const definedInput = describeRange(input);
    const definedOutput = describeRange(output);

    const methodFunction = typeof method === "string" ? transitions[method] : method;
    
    const augmentedMethod = (x: number) => normalize(definedInput, methodFunction(x)) * definedOutput.rangeSize + definedOutput.min

    return {
        input: definedInput,
        output: definedOutput,
        initial,
        method: augmentedMethod,
    };
}