function mergeIntervals(intervals) {
    if (!intervals.length) return [];

    intervals.sort((a, b) => a.start - b.start);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const prev = merged[merged.length - 1];
        const curr = intervals[i];
        if (curr.start <= prev.end) {
            prev.end = Math.max(prev.end, curr.end);
        } else {
            merged.push(curr);
        }
    }

    return merged;
}

const interval=[
    { start: 1, end: 3 },
    { start: 2, end: 6 },
    { start: 8, end: 10 },
    { start: 9, end: 12 }
  ]
  
console.log(mergeIntervals(interval));
