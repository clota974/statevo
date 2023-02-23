import { useState } from "react";
import { Evolution } from "../types/evolution.interface";
import describeEvolution from "../utils/describeEvolution.util";

export default function useEvolution(evolution: Evolution) {
    const evo = describeEvolution(evolution); // Defined evolution
    const [evolutionState, setEvolutionState] = useState<number>(evo.initial);

    const evolve = (step: number) => {
        const newValue = evo.method(evolutionState + step);
        setEvolutionState(newValue);
    }

    return [evolutionState, evolve]

}