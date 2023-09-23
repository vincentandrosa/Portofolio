let form = document.getElementById("data")

        form.addEventListener("submit", (e) => {
            e.preventDefault()

            let valid1 = document.getElementById("name")
            let valid2 = document.getElementById("email")
            let valid3 = document.getElementById("number")
            error.innerHTML=""

            if (valid1.value.length < 3 || valid1.value.length > 10) {
                error.innerHTML = "Username must be between 3 and 10 letters."
                return
            }

            if (!emailvalid(valid2.value)) {
                error.innerHTML = "Email is not accepted, make sure you have added '@' and '.com'."
                return
            }

            if (!phonevalid(valid3.value)) {
                error.innerHTML = "Phone number is not 12 digits or is not numbers."
                return
            }

            let con = false;

            con = confirm("Are you sure this is correct?")

            if (con == true) {
                alert("Thank you for subscribing")
                window.location.href="./../Menu.html"
            }
            else {
                alert("Please try again")
                window.location.href="./Subscribe.html"
            }

        })

function phonevalid(valid3){
    let length = valid3.length
    let isNum = true
    let isLength = false

    if(length == 12){
        isLength = true
    }

    for (let i = 0 ; i < length ; i++) {
        let charCode = valid3.charCodeAt(i)

        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
            isNum = false
        }
    
    }

    if(isLength && isNum){
        return true
    }
}

function emailvalid(valid2){
    return valid2.indexOf('@') != -1 && valid2.endsWith('.com')
}