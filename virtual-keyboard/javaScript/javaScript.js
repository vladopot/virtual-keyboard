const DOM = `<div class="keyboard">
<textarea class="keyboard__text-area"></textarea>
<!--<textarea class="keyboard__text-area" type="text" autofocus></textarea>-->
<div class="keyboard__board">
    <div class="keyboard__board__rus">
        <div class="keyboard__board__rus__first-board-line">
            <div class="button"><p>1</p></div>
            <div class="button"><p>2</p></div>
            <div class="button"><p>3</p></div>
            <div class="button"><p>4</p></div>
            <div class="button"><p>5</p></div>
            <div class="button"><p>6</p></div>
            <div class="button"><p>7</p></div>
            <div class="button"><p>8</p></div>
            <div class="button"><p>9</p></div>
            <div class="button"><p>0</p></div>
            <div class="button"><p>-</p></div>
            <div class="button"><p>=</p></div>
            <div class="button managers"><p>BackSpace</p></div>
        </div>
        <div class="keyboard__board__rus__second-board-line">
            <div class="button managers"><p>Tab</p></div>
            <div class="button"><p>q</p></div>
            <div class="button"><p>w</p></div>
            <div class="button"><p>e</p></div>
            <div class="button"><p>r</p></div>
            <div class="button"><p>t</p></div>
            <div class="button"><p>y</p></div>
            <div class="button"><p>u</p></div>
            <div class="button"><p>i</p></div>
            <div class="button"><p>o</p></div>
            <div class="button"><p>p</p></div>
            <div class="button"><p>[</p></div>
            <div class="button"><p>]</p></div>
            <div class="button managers"><p>del</p></div>
        </div>
        <div class="keyboard__board__rus__third-board-line">
            <div class="button managers"><p>Caps Lock</p></div>
            <div class="button"><p>a</p></div>
            <div class="button"><p>s</p></div>
            <div class="button"><p>d</p></div>
            <div class="button"><p>f</p></div>
            <div class="button"><p>g</p></div>
            <div class="button"><p>h</p></div>
            <div class="button"><p>j</p></div>
            <div class="button"><p>k</p></div>
            <div class="button"><p>l</p></div>
            <div class="button"><p>;</p></div>
            <div class="button"><p>'</p></div>
            <div class="button managers"><p>Enter</p></div>
        </div>
        <div class="keyboard__board__rus__forth-board-line">
            <div class="button managers" id="shift"><p>Shift</p></div>
            <div class="button"><p>&bsol;</p></div>
            <div class="button"><p>z</p></div>
            <div class="button"><p>x</p></div>
            <div class="button"><p>c</p></div>
            <div class="button"><p>v</p></div>
            <div class="button"><p>b</p></div>
            <div class="button"><p>n</p></div>
            <div class="button"><p>m</p></div>
            <div class="button"><p>,</p></div>
            <div class="button"><p>.</p></div>
            <div class="button"><p>/</p></div>
            <div class="button arrows"><p>&uarr;</p></div>
            <div class="button managers" id="shift"><p>Shift</p></div>
        </div>
        <div class="keyboard__board__rus__fifth-board-line">
            <div class="button managers"><p>Ctrl</p></div>
            <div class="button managers"><p>Win</p></div>
            <div class="button managers"><p>alt</p></div>
            <div class="button managers" id="space"> </div>
            <div class="button managers"><p>alt</p></div>
            <div class="button managers"><p>ctrl</p></div>
            <div class="button arrows"><p>&larr;</p></div>
            <div class="button arrows"><p>&darr;</p></div>
            <div class="button arrows"><p>&rarr;</p></div>
        </div>
    </div>
</div>
</div>`;
document.body.insertAdjacentHTML("afterbegin", DOM);
let keyCodes = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 191, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];
let managersKeyCodes = [9, 20, 16, 17, 91, 18, 8];
let buttons = document.querySelectorAll(".button");

function pressKeyAnimation(e) {
    console.log(e.keyCode);
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
document.querySelector(".keyboard__board").addEventListener("click", addScreen);
addEventListener("keydown", pressKeyAnimation);
addEventListener("keyup", upButton);