function throttle(fn, delay) {
    let lastCall = 0;
    
    return function (...args) {
        const now = Date.now();
        
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}


const processScroll = throttle(() => {
    console.log("Scroll handled");
}, 500);

window.addEventListener("scroll", processScroll);
