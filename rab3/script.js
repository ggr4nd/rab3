"use strict";

let users = [
    {
        "lg" : "admin",
        "ps" : "admin"
    },
    {
        "lg" : "user",
        "ps" : "user"
    }
];

let SUP = document.querySelector(".SUP");
SUP.style.display = "none";
let blform = document.querySelector(".blform");
blform.style.display = "none";


let container = document.querySelector(".container");
container.style.display = "none";

let btnLOGIN = document.querySelector(".btnlog");
btnLOGIN.addEventListener("click", formwrap);
let butUP = document.querySelector(".btnUP");
butUP.addEventListener("click", formup);


let butt = document.querySelector(".butt");
butt.addEventListener("click", getRegPass);
let but = document.querySelector(".but");
but.addEventListener("click", getLogPass);

function formup() {
    let SUP = document.querySelector(".SUP");
    SUP.style.display = "block";
    let blform = document.querySelector(".blform");
    blform.style.display = "none";

    
}

function formwrap() {
    let blform = document.querySelector(".blform");
    blform.style.display = "block";
    let SUP = document.querySelector(".SUP");
    SUP.style.display = "none";

}
function getLogPass() {
    let frmlog = document.querySelector("#frmlog").value;
    let frmpass = document.querySelector("#frmpass").value;

    console.log("Login -> "+frmlog);
    console.log("Password -> "+frmpass);
    checkLogPass(frmlog, frmpass);
}
function checkLogPass(frmlog, frmpass) {
    let flag = false;
    let content = document.querySelector(".content");
    for (const user of users) {
        if (user.lg == frmlog && user.ps == frmpass) {
            flag = true;
            content.innerHTML = `Hello, ${frmlog}`;

            let blform = document.querySelector(".blform");
            blform.style.display = "none";
            let container = document.querySelector(".container");
            container.style.display = "block";
            
            
            break;
        }
    }
    if (!flag) {
        content.innerHTML = `Error!`;
    }
}

function getRegPass() {
    let logup = document.querySelector("#logup").value;
    let passup = document.querySelector("#passup").value;
    let emailup = document.querySelector("#emailup").value;

    console.log("Login -> "+logup);
    console.log("Password -> "+passup);
    console.log("Email -> "+emailup);
    checkRegPass(logup, passup, emailup);
}

function checkRegPass(logup, passup,emailup) {
    let flagg = false;
    let content = document.querySelector(".content");
    if (logup != "" && passup != "" && emailup != "") {
        flagg = true;
        let SUP = document.querySelector(".SUP");
        SUP.style.display = "none";
        content.innerHTML = `Вы зарегистрировались`;
    }
    if (!flagg) {
        content.innerHTML = `Error!`;
    }

}

let offset = 0;
const sliderLine = document.querySelector('.sliderLine');
document.querySelector('.sliderNext').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.sliderPrev').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});



  