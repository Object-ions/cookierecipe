let h1 = document.querySelector("h1");
h1.onmouseover = function() {
    console.log("I am a heading element.");
};
let p = document.querySelector("p");
p.onclick = function() {
    document.querySelector("p>em").innerText = "Don't be surprised";
}
let img = document.querySelector("img");
img.onmouseover = function() {
    img.style.height = "700px";
};