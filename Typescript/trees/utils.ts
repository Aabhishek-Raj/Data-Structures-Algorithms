import * as fs from "fs";
const input = fs.readFileSync('input.txt', "utf-8").trim().split(/\s+/);
let index = 0;


export function next(): string {
    return input[index++];
}
export function nextBoolean(): boolean {
    return next() === "true";
}

export function nextInt(): number {
    return Number(next());
}
