import * as R from "ramda";

// const stringToArray = (str: string): string[] =>{
//     return str.split("");
// }

/* Question 1 */
export const countLetters: (str: string)=> Record<string, number> = (str: string): Record<string, number> =>{
    const countLetters1: (input: string)=> Record<string, number> = R.pipe(
        (s: string) => R.trim(s),
        (s: string) => R.toLower(s),
        (s: string) => R.split("")(s),
        (arr: string[]) => R.countBy(R.identity,arr)
        
    );//(str) as Record<string, number>;
    return countLetters1(str);
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

export const treeToSentence : undefined = undefined

