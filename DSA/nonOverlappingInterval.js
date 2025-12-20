function maxNonOverlappingTasks(tasks) {
    // Sort by end time
    tasks.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastEnd = -Infinity;

    for (let [start, end] of tasks) {
        if (start >= lastEnd) {
            count++;
            lastEnd = end;
        }
    }

    return count;
}
