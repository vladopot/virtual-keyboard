let keyCodes = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 220, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191];

function pressKeyAnimation(e) {
    console.log(e.keyCode);
    console.log(String.fromCharCode(e.keyCode));
}

addEventListener("keydown", pressKeyAnimation)