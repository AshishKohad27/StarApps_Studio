
import UmbrellaArr from "../../Umbrella.json" assert {type: "json"}

let main = document.getElementById("main");
let setImg = document.getElementById("setImg");
let upload = document.getElementById("upload");
let loaderSvg = document.getElementById("loaderSvg");
let logo_label = document.getElementById("logo_label");
let loader_UploadLogo = document.getElementById("loader_UploadLogo");
let umbrellaDiv = document.getElementById("umbrellaDiv");
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
        umbrellaDiv.style.display = "none";
        loaderSvg.style.display = "block";
        logo_label.style.display = "none";
        loader_UploadLogo.style.display = "block";
    });

    setTimeout(() => {
        setImg.style.display = "block";
        loaderSvg.style.display = "none"
        logo_label.style.display = "block";
        loader_UploadLogo.style.display = "none";
        umbrellaDiv.style.display = "block";
    }, 1000);
    // logo_label.style.display="block"

    console.log("Image Set Successfully")
}

