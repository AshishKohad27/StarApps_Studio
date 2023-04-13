// Importing json file
import UmbrellaArr from "../../Umbrella.json" assert {type: "json"}

// Getting all id or class 
let main = document.getElementById("main");
let setImg = document.getElementById("setImg");
let upload = document.getElementById("upload");
let loaderSvg = document.getElementById("loaderSvg");

// Id of uploading button and its loader
let logo_label = document.getElementById("logo_label");
let loader_UploadLogo = document.getElementById("loader_UploadLogo");

// umbrella image displayed 
let umbrellaDiv = document.getElementById("umbrellaDiv");

//color Palette button
document.getElementById("pink").addEventListener("click", () => colorPalette("pink"));
document.getElementById("blue").addEventListener("click", () => colorPalette("blue"));
document.getElementById("yellow").addEventListener("click", () => colorPalette("yellow"));


// call back function whenever any color button selected will be invoked
async function colorPalette(colorFromBtn) {

    // we remove already present umbrella in our ui
    setImg.src = "";

    // here data getting filter on the bases of parameters (i.e. colorFromBtn)
    let filter = UmbrellaArr.filter((item) => item.color === colorFromBtn)[0];

    // after getting filter we set new background color , new upload button color and new umbrella base on selected umbrella 
    loaderSvg.style.fill = `${filter.colorBtn}`
    main.style.backgroundColor = `${filter.background}`;
    upload.style.backgroundColor = `${filter.colorBtn}`;

    // some time image take to much time to load so set Promise and put condition
    await new Promise((resolve) => {
        // when image load our promise will be resolved
        setImg.onload = resolve;

        // here our image is loading on particular div
        setImg.src = `${filter.umbrella}`;

        // but i don't want to display to user so i make it none 
        setImg.style.display = "none";

        // instead of displaying umbrella image while it is loading I am using loader
        loaderSvg.style.display = "block";

        // logo should not be visible when umbrella image loading
        umbrellaDiv.style.display = "none";

        // same for upload button when new umbrella image is loaded upload svg change to loader div
        logo_label.style.display = "none";
        loader_UploadLogo.style.display = "block";
    });

    //purpose of adding settime was to show loading functionality because some time image loading 
    // happened with in a millisecond and loading indicator will not be displayed that why i added this 
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

