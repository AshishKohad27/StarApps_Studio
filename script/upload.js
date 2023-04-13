const logo_input = document.querySelector("#logo_input"); // input type="file"
let displayLogo_name = document.getElementById("displayLogo_name"); // display : bottom of umbrella
let deleteBtn = document.getElementById("deleteBtn"); // only visible when logo will upload
var Uploaded_logo = ""; // it stored url of logo amd make it available globally 

logo_input.addEventListener("change", function (e) {
    // Setting file name inside our upload button;
    displayLogo_name.innerHTML = e.target.files[0].name;

    // Delete button will be visible once data has been uploaded
    deleteBtn.innerHTML = `<h1 id="delete_logo"><ion-icon name="close-outline"></ion-icon></h1>`;
    deleteBtn.addEventListener("click", () => {
        callDelete();
    })

    // we are creating new file since we are getting fake path
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        //after load we get url of our logo
        Uploaded_logo = reader.result;

        document.querySelector("#display_logo>img").style.display = "block"
        // then we set logo to desired div
        document.querySelector("#display_logo>img").src = `${Uploaded_logo}`;

        // console.log('Uploaded_logo:', Uploaded_logo)
    });

    reader.readAsDataURL(this.files[0])
})

// it will remove all data which we set above
function callDelete() {
    Uploaded_logo = ""
    displayLogo_name.innerHTML = "UPLOAD LOGO"
    document.querySelector("#display_logo>img").style.display = "none"
    document.querySelector("#display_logo>img").src = ""
    deleteBtn.innerHTML = "";
}