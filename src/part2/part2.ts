import * as R from "ramda";
import { pipe } from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countLetters: (s: string) => { [index: string]: number } = (s: string): { [index: string]: number } => {
    const pipeFunctions: (input: string) => { [index: string]: number } = pipe(
        R.replace(/\s/g, ''),
        (str: string) => R.split("")(str),
        (arr: string[]) => R.countBy(R.toLower)(arr));
    return pipeFunctions(s);
}

/* Question 2 */


type Pair = {
    open: string;
    close: string;
};

const pairs: Pair[] = [
    { open: "(", close: ")" },
    { open: "{", close: "}" },
    { open: "[", close: "]" },
];

const isOpener = (char: string) => pairs.some((pair) => pair.open === char);

const isCloser = (char: string) => pairs.some((pair) => pair.close === char);

const matchingPair = (open: string | undefined, close: string) => pairs.find((pair) => pair.open === open && pair.close === close);

export const isPaired: (s: string) => boolean = pipe(
    stringToArray,
    R.filter((char: string) => isOpener(char) || isCloser(char)),
    R.reduce((acc: string[], curr: string) => isOpener(curr) ? [...acc, curr] : matchingPair(R.last(acc), curr) ? R.init(acc) : [...acc, curr], []),
    R.isEmpty
)


// Question 3 *
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence: (tree: WordTree) => string = (tree: WordTree): string => {

    const s: string[] = tree.children.map((child: WordTree) => treeToSentence(child)).filter(sentence => sentence !== '');
    return [tree.root, ...s].join(' ');
}

function sumEven(numbersAsString: string[]): number {
    let sum = 0
    for (let i = 0; i < numbersAsString.length; i++) {
        let num: number = parseInt(numbersAsString[i], 10)
        if (num % 2 == 0) {
            sum += num;
        }
    }
    return sum;
}

export const sumEv :(numberAsString: string[])=> number = (numberAsString: string[]): number => 
    R.reduce((acc: number, curr: string) => parseInt(curr, 10) % 2 == 0 ? acc + parseInt(curr, 10): acc , 0, numberAsString) // sum is number
    