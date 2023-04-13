const logo_input = document.querySelector("#logo_input");
let displayLogo_name = document.getElementById("displayLogo_name");
let deleteBtn = document.getElementById("deleteBtn");
var Uploaded_logo = "";
logo_input.addEventListener("change", function (e) {

    console.log("i am get click")
    //console.log(logo_input.value);//fake path
    displayLogo_name.innerHTML = e.target.files[0].name;
    deleteBtn.innerHTML = `<h1 id="delete_logo"><ion-icon name="close-outline"></ion-icon></h1>`;
    deleteBtn.addEventListener("click", () => {
        callDelete();
    })
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        Uploaded_logo = reader.result;
        document.querySelector("#display_logo>img").style.display = "block"
        document.querySelector("#display_logo>img").src = `${Uploaded_logo}`;
        console.log('Uploaded_logo:', Uploaded_logo)
    });

    reader.readAsDataURL(this.files[0])
})

function callDelete() {
    Uploaded_logo = ""
    displayLogo_name.innerHTML = "UPLOAD LOGO"
    document.querySelector("#display_logo>img").style.display = "none"
    document.querySelector("#display_logo>img").src = ""
    deleteBtn.innerHTML = "";
}