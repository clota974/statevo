/**
 * @jest-environment jsdom
 */

import useEvolution from "../src/hooks/useEvolution";
import { act, render, renderHook } from '@testing-library/react'
import React from "react";

const setup = (evolution: any) => {
    const result = {
        current: null as any,
    };
    const Wrapper = () => {
        result.current = useEvolution(evolution);
        return null
    };
    render(<Wrapper />);
    return result;
}


describe('One evolution', () => {
    it('should evolve linearly', () => {
        const result = setup({ 
                input: [0, 100],
                output: [0, 100],
                initial: 50,
                method: 'linear',
            });


        expect(result.current[0]).toEqual(50);
        act(() => {
            // Add 10
            result.current[1](10);
        })

        expect(result.current[0]).toEqual(60);
        act(() => {
            // Add 5
            result.current[1](5);
        });
        
        expect(result.current[0]).toEqual(65);
    });
})