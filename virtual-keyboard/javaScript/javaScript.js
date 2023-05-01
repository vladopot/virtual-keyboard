let keyCodes = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 191, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];
let managersKeyCodes = [9, 20, 16, 17, 91, 18, 8];
let buttons = document.querySelectorAll(".button");

function pressKeyAnimation(e) {
    console.log(typeof e.keyCode);
    for (let i = 0; i < buttons.length; i++) {
        if (e.keyCode === Number(buttons[i].dataset.kcode)) {
            buttons[i].classList.add("active");
        }
    }
    if (!managersKeyCodes.includes(e.keyCode)) {
        addKeyboard(String.fromCharCode(e.keyCode));
    } else if (e.keyCode === 13) {
        addKeyboard("\r\n");
    } else if (e.keyCode === 8) {
        document.querySelector(".keyboard__text-area").innerHTML = document.querySelector(".keyboard__text-area").textContent.substring(0, document.querySelector(".keyboard__text-area").textContent.length - 1);
    }
}

function upButton (e) {
    for (let i = 0; i < buttons.length; i++) {
        if (e.keyCode === Number(buttons[i].dataset.kcode)) {
            buttons[i].classList.remove("active");
        }
    }
}

function addScreen (e) {
    let text = e.target.closest("div").textContent;
    console.log(text);
    if (!e.target.closest("div").classList.contains("managers")) {
        if (document.querySelector("#shift").classList.contains("active")) {
            document.querySelector(".keyboard__text-area").insertAdjacentHTML("beforeend", text.toUpperCase());
        } else {
            document.querySelector(".keyboard__text-area").insertAdjacentHTML("beforeend", text);
        }
    } else if (text === "BackSpace") {
        document.querySelector(".keyboard__text-area").innerHTML = document.querySelector(".keyboard__text-area").textContent.substring(0, document.querySelector(".keyboard__text-area").textContent.length - 1);
    } else if (text === "Enter") {
        document.querySelector(".keyboard__text-area").innerHTML = document.querySelector(".keyboard__text-area").textContent + "\n";
    } else if (text === "Shift") {
        if (e.target.closest("div").classList.contains("active")) {
            e.target.closest("div").classList.remove("active");
        } else if (!e.target.closest("div").classList.contains("active")) {
            e.target.closest("div").classList.add("active");
        };
    }
}

function addKeyboard (e) {
    if (document.querySelector("#shift").classList.contains("active")) {
        document.querySelector(".keyboard__text-area").insertAdjacentHTML("beforeend", e.toUpperCase());
    } else {
        document.querySelector(".keyboard__text-area").insertAdjacentHTML("beforeend", e.toLowerCase());
    }
}

function init () {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].dataset.kcode = keyCodes[i];
    }
}


init();
document.querySelector(".keyboard__board").addEventListener("click", addScreen)
addEventListener("keydown", pressKeyAnimation);
addEventListener("keyup", upButton);