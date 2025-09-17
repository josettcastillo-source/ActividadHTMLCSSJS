document.getElementById("red").innerText = "Adios";

document.querySelector(".blue").computedStyleMap.color = "orange";

document.getElementById("clickeable").addEventListener("click", function() {
    this.style.backgroundColor = "brown";
    this.style.color = "white";
});