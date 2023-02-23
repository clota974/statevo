import { TransitionFunction } from "../../types/evolution.interface";
import easeInOutTransition from "./easeInOut";
import linearTransition from "./linear.transition";

interface Transitions {
    linear: TransitionFunction;
    easeInOut: TransitionFunction;
}

const transitions: Transitions = {
    linear: linearTransition,
    easeInOut: easeInOutTransition
}

export default transitions;