import { countLetters, isPaired, treeToSentence, WordTree } from "../../src/part2/part2";

describe("Assignment 1 Part 2", () => {
    describe("countLetters", () => {
        it("counts letters", () => {
            expect(countLetters("aaabbbb")).toEqual({"a": 3, "b":4});
        });
        it("counts letters", () => {
            expect(countLetters("AaaBbbb")).toEqual({"a": 3, "b":4});
        });
        it("counts letters", () => {
            expect(countLetters("ABbbaab")).toEqual({"a": 3, "b":4});
        });
        it("counts letters", () => {
            expect(countLetters("I am robot")).toEqual({"i": 1, "a": 1, "m": 1, "r":1, "o":2, "b":1, "t":1});
        });
        it("counts letters", () => {
            expect(countLetters("abcdefg")).toEqual({"a": 1, "b":1, "c": 1, "d": 1, "e":1, "f":1, "g":1});
        });
        it("counts letters", () => {
            expect(countLetters("ancASnsdjAsdfas")).toEqual({"a": 4, "n":2, "c": 1, "s":4, "d":2, "j":1, "f":1});
        });
        it("counts letters", () => {
            expect(countLetters("PJADSSdfijerPJVXZnwfjiMWOjf")).toEqual({"p": 2, "j": 5, "a": 1, "d": 2, "s": 2, "f": 3, "i": 2, "e": 1, "r": 1, "v": 1, "x": 1, "z": 1, "n": 1, "w": 2, "m": 1, "o": 1});
        });
        it("counts letters", () => {
            expect(countLetters("mxnMCXVInsbhxMWMmsMWEP")).toEqual({"m": 6, "x": 3, "h": 1, "n": 2, "c": 1, "v": 1, "i": 1, "s": 2, "b": 1, "w": 2, "e": 1, "p": 1});
        });
        it("counts letters", () => {
            expect(countLetters("nnsNNsjnsdfNNiifwydNNXIEWHn")).toEqual({"n": 10, "s": 3, "j": 1, "d": 2, "f": 2, "i": 3, "w": 2, "y": 1, "x": 1, "e": 1, "h": 1});
        });
    });

    describe("isPaired", () => {
        it("returns true for a string with paired parens", () => {
            expect(isPaired("([{}])")).toBe(true);
        });
        it("returns true for a string with paired parens", () => {
            expect(isPaired("This is ([some]) {text}.")).toBe(true);
        });
        it("returns true for a string with paired parens", () => {
            expect(isPaired("No parens, no problems.")).toBe(true);
        });
        it("returns true for a string with paired parens", () => {
            expect(isPaired("[](){}")).toBe(true);
        });

        it("returns false when the parens are not paired", () => {
            expect(isPaired("(]")).toBe(false);
            expect(isPaired("This is ]some[ }text{")).toBe(false);
            expect(isPaired("(")).toBe(false);
            expect(isPaired(")(")).toBe(false);
            expect(isPaired("())")).toBe(false);
        });
    });

    describe("treeToSentence", () => {
        it("Represents a tree as a sentence", () => {
            const t1: WordTree = {root:"hello", children:[{root: "world", children:[]}]}
            expect(treeToSentence(t1)).toBe("hello world");
        });

        it("Represents a tree as a sentence", () => {
            const t2: WordTree = {root:"hello", children:[{root: "there", children:[]}, {root:"!", children:[]}]}
            expect(treeToSentence(t2)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", () => {
            const t3: WordTree = {root:"hello", children:[{root: "there", children:[{root:"!", children:[]}]}]}
            expect(treeToSentence(t3)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", () => {
            const t4: WordTree = {root:"hello", children:[]}
            expect(treeToSentence(t4)).toBe("hello");
        });
        it("Represents a tree as a sentence", () => {
            const t5: WordTree = {root:"", children:[]}
            expect(treeToSentence(t5)).toBe("");
        });
    });
});

