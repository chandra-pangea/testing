//KISS Example — Overcomplicating a Simple Operation


// Trying to calculate sum with unnecessary functional tricks
const sum = (...nums: number[]) =>
    nums.reduce((acc, val) => {
        if (val % 1 === 0) return acc + val;
        return acc + Number.parseInt(val.toString());
    }, 0);


function sum2(...nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0);
}
