function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}


const handleTyping = debounce((text) => {
    console.log("User stopped typing:", text);
}, 500);

document.getElementById("search").addEventListener("input", (e) => {
    handleTyping(e.target.value);
});
