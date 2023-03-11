var input = document.getElementById("slope_break");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อคำนวณ
        document.getElementById('align-degree').focus();
    }
});

var input = document.getElementById("align-degree");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อคำนวณ
        document.getElementById('px').focus();
    }
});

var input = document.getElementById("px");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_px").click(); //enter เพื่อคิดเลข
        document.getElementById('curve').focus();
    }
});

var input = document.getElementById("curve");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('spin').focus();
    }
});

var input = document.getElementById("spin");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('degree90').focus();
    }
});

var input = document.getElementById("degree90");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_degree").click(); //enter เพื่อคิดเลข
        document.getElementById('wind').focus();
    }
});

var input = document.getElementById("wind");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('height').focus();
    }
});

var input = document.getElementById("height");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('distance').focus();
    }
});

var input = document.getElementById("distance");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('ground').focus();
    }
});

var input = document.getElementById("ground");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
    }
});