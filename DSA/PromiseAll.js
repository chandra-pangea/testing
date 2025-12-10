function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then(value => {
                    results[index] = value;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject); // reject as soon as one fails
        });
    });
}


function myPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            Promise.resolve(p)
                .then(resolve)
                .catch(reject);
        });
    });
}



const p1 = new Promise((resolve) =>
    setTimeout(() => resolve("✓ P1 resolved"), 1000)
);

const p2 = new Promise((resolve) =>
    setTimeout(() => resolve("✓ P2 resolved"), 500)
);

const p3 = new Promise((_, reject) =>
    setTimeout(() => reject("✗ P3 rejected"), 800)
);


// 👉 resolves only when ALL succeed, otherwise rejects.
Promise.all([p1, p2, p3])
    .then(result => console.log("Promise.all Result:", result))
    .catch(error => console.log("Promise.all Error:", error));

// 👉 returns first promise that settles (resolve or reject).
Promise.race([p1, p2, p3])
    .then(result => console.log("Promise.race Result:", result))
    .catch(error => console.log("Promise.race Error:", error));


// 👉 resolves with first successful promise
// 👉 ignores rejections UNLESS all fail.

Promise.any([p1, p2, p3])
    .then(result => console.log("Promise.any Result:", result))
    .catch(error => console.log("Promise.any Error:", error));


// 👉 waits for all promises, returns result of each (success or failure)
Promise.allSettled([p1, p2, p3])
    .then(result => console.log("Promise.allSettled Result:", result));

