import { Result, makeFailure, makeOk, bind, either } from "../lib/result";
import * as R from "ramda";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult:<T>(pred: (x: T) => boolean, arr: T[])=> Result<T> = <T>(pred: (x: T) => boolean, arr: T[]): Result<T> => {
    return R.findIndex(pred)(arr) !== -1 ? makeOk(arr[R.findIndex(pred)(arr)]) : makeFailure("No element found.");
}

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 :(arr: number[])=> Result<number> = ( arr: number[]): Result<number> => {
    const isEven = (x: number) => x % 2 === 0;
    return bind(findResult(isEven, arr), (x: number) => makeOk(x * x));
}

export const returnSquaredIfFoundEven_v3 : (arr: number[])=> number = (arr: number[]): number => {
    const isEven = (x: number) => x % 2 === 0;
    return either(findResult(isEven, arr), (x: number) => x * x, (e: string) => -1);
}


// const data = [1, 2, 3, 4, 5];
// const data2 = [1, 3, 5];
// const data3 = [1, -2, 3, -4, 5];
// const data4 = [1, -2.2, 3, -4.1, 5];
// console.log("data: ", data);
// console.log(returnSquaredIfFoundEven_v1(data));
// console.log(returnSquaredIfFoundEven_v2(data));
// console.log(returnSquaredIfFoundEven_v3(data));

// console.log("data2: ", data2);
// console.log(returnSquaredIfFoundEven_v1(data2));
// console.log(returnSquaredIfFoundEven_v2(data2));
// console.log(returnSquaredIfFoundEven_v3(data2));

// console.log("data3: ", data3);
// console.log(returnSquaredIfFoundEven_v1(data3));
// console.log(returnSquaredIfFoundEven_v2(data3));
// console.log(returnSquaredIfFoundEven_v3(data3));

// console.log("data4: ", data4);
// console.log(returnSquaredIfFoundEven_v1(data4));
// console.log(returnSquaredIfFoundEven_v2(data4));
// console.log(returnSquaredIfFoundEven_v3(data4));