
import UmbrellaArr from "../Umbrella.json" assert {type: "json"}


let main = document.getElementById("main");
let setImg = document.getElementById("setImg");
let upload = document.getElementById("upload");
let loaderSvg = document.getElementById("loaderSvg");
//color Palette button
document.getElementById("pink").addEventListener("click", () => colorPalette("pink"));
document.getElementById("blue").addEventListener("click", () => colorPalette("blue"));
document.getElementById("yellow").addEventListener("click", () => colorPalette("yellow"));

async function colorPalette(colorFromBtn) {
    setImg.src = "";
    let filter = UmbrellaArr.filter((item) => item.color === colorFromBtn)[0];

    loaderSvg.style.fill = `${filter.colorBtn}`
    main.style.backgroundColor = `${filter.background}`;
    upload.style.backgroundColor = `${filter.colorBtn}`;

    await new Promise((resolve) => {
        setImg.onload = resolve;
        setImg.src = `${filter.umbrella}`;
        setImg.style.display = "none";
        loaderSvg.style.display = "block";
    });

    setTimeout(() => {
        loaderSvg.style.display = "none"
        setImg.style.display = "block";
    }, 1000);

    console.log("Image Set Successfully")
}

