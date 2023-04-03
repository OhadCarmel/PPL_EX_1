import { Result, makeFailure, makeOk, bind, either } from "../lib/result";
import * as R from "ramda";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult:<T>(pred: (x: T) => boolean, arr: T[])=> Result<T> = <T>(pred: (x: T) => boolean, arr: T[]): Result<T> => 
    R.findIndex(pred)(arr) !== -1 ? makeOk(arr[R.findIndex(pred)(arr)]) : makeFailure("No element found.")

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 :(arr: number[])=> Result<number> = ( arr: number[]): Result<number> => 
    bind(findResult((x: number) => x % 2 === 0, arr), (x: number) => makeOk(x * x));


export const returnSquaredIfFoundEven_v3 : (arr: number[])=> number = (arr: number[]): number => 
    either(findResult((x: number) => x % 2 === 0, arr), (x: number) => x * x, (e: string) => -1);


