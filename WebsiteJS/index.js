//random pasword generator








function passwordGenerator(paswordlength, includeCapi, includeLowe, includeNum, includeSym) {
    let lowerArr = "abcdefghijklmnopqrstuvwxyz";
    let upperArr = lowerArr.toUpperCase();
    let numArr = "1234567890";
    let symArr = "!@#$%^&*()+=-_/*><,.;'\"\':{}[]|\\`\~"
    console.log(lowerArr);
    console.log(upperArr);
    console.log(numArr);

    console.log(symArr);

    let allowedChar = "";
    let password = "";
    allowedChar += includeCapi ? upperArr : "";
    allowedChar += includeLowe ? lowerArr : "";
    allowedChar += includeNum ? numArr : "";
    allowedChar += includeSym ? symArr : "";

    console.log(allowedChar);
    if (paswordlength < 1 || allowedChar.length === 0) {
        console.log(`Password err`);
    }
    for (let i = 0; i < paswordlength; i++) {
        let indexofPassword = Math.floor(Math.random() * allowedChar.length);
        password+=allowedChar[indexofPassword];
    }
    // console.log(`good`); --> Checking
    // console.log(password); --> Checking 
    return password;
}

const paswordlength = 12;
const includeCapi = true;
const includeLowe = true;
const includeNum = true;
const includeSym = true;

function randomPassword(){
    let passwordGenerated = passwordGenerator(paswordlength, includeCapi, includeLowe, includeNum, includeSym);
    console.log(passwordGenerated);
    let outputdisplay=document.getElementById('outputdisplay');
    outputdisplay.textContent=passwordGenerated;
}