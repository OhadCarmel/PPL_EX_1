import * as R from "ramda";
import { pipe } from "ramda";

const stringToArray = R.split("");
//"Ohad Carmel Is ThE kinG"

/* Question 1 */
export const countLetters: (s: string) => { [index: string]: number } = (s: string): { [index: string]: number } => {
    const pipeFunctions: (input: string) => { [index: string]: number } = pipe(
        R.replace(/\s/g, ''),
        (str: string) => R.split("")(str),
        (arr: string[]) => R.countBy(R.toLower)(arr));
    return pipeFunctions(s);
}

/* Question 2 */
export const isPaired: (s: string) => boolean = (s: string): boolean => {
    const pipeFunctions: (input: string) => string[] = pipe(
        R.replace(/\s/g, ''),
        (str: string) => R.split("")(str));

    const parenthesesFilter = (str: string) => str === "(" || str === ")" || str === "[" || str === "]" || str === "{" || str === "}";
    //Ramda.takeLast() - returns the last n elements of the given list or string.
    //Ramda.dropLast() - returns a new list or string without the last n elements.
    //Ramda.slice() - returns a new list or string containing the elements between the start and end indexes.
    //Ramda.take() - returns the first n elements of the given list or string.
    //Ramda.drop() - returns a new list or string without the first n elements.

    //Ramda.split() - splits a string into an array of strings based on the given separator.
    return true;
}

/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence: (tree: WordTree) => string = (tree: WordTree): string => {

    const s: string[] = tree.children.map((child: WordTree) => treeToSentence(child)).filter(sentence => sentence !== '');
    return [tree.root, ...s].join(' ');
}

const t1: WordTree = {
    root: "Hello",
    children: [
        {
            root: "students",
            children: [
                {
                    root: "how",
                    children: []
                }
            ]
        },
        {
            root: "are",
            children: []
        },
        {
            root: "you?",
            children: []
        },
    ]
}
console.log(treeToSentence(t1)); // ==> Hello students how are you?