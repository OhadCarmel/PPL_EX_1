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


export const isPaired = (arr: string[]): boolean =>{
    type Pair = {
        open: string;
        close: string;
      };

    const pairs: Pair[] = [
        { open: "(", close: ")" },
        { open: "{", close: "}" },
        { open: "[", close: "]" },
      ];
   
    const open = ["(", "[", "{"];
    const close = [")", "]", "}"];
    
    const symetric = R.reduce(
        (acc: string[], char: string) => {

            const isOpener = (char: string) => pairs.some((pair) => pair.open === char);

            const isCloser = (char: string) => pairs.some((pair) => pair.close === char);

            if(isOpener(char)){
                return [...acc, char];
            }
            if(isCloser(char)){
                const lastChar: (acc: string[]) => string | undefined = (acc: string[]) => R.last(acc);
                const last = lastChar(acc);
                if(last){
                    const matchingPair: (pair: Pair | undefined, last: string, char: string) => Pair| undefined = (pair: Pair | undefined, last: string, char: string) => pairs.find((pair) => pair.open === last && pair.close === char);
                    const match = matchingPair(pairs.find((pair) => pair.open === last), last, char);
                    if(match){
                        const retvalue = (acc:string) => R.init(acc) === undefined ? [] : R.init(acc);
                        return retvalue;
                    }
                    else return acc;
                    
                }
            }
            return acc;
            
        },
        [],
        arr
    );
    return symetric.length === 0;
}
        

/* Question 3 *
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence: (tree: WordTree) => string = (tree: WordTree): string => {

    const s: string[] = tree.children.map((child: WordTree) => treeToSentence(child)).filter(sentence => sentence !== '');
    return [tree.root, ...s].join(' ');
}

