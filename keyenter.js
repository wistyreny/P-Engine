function culcpx(value) { //function บวกเลขในช่อง px
    var expression = document.getElementById("px").value;
    var saveExpression = expression.replace(/[^-()\d/*+.]/g, '');

    if (expression == '') {
        document.getElementById("px").value = '';
    } else
        document.getElementById('px').value = (eval(saveExpression));
}

function culcdg(value) { //function บวกเลขในช่อง dg
    var expression = document.getElementById("degree90").value;
    var saveExpression = expression.replace(/[^-()\d/*+.]/g, '');

    if (expression == '') {
        document.getElementById("degree90").value = '';
    } else
        document.getElementById('degree90').value = (eval(saveExpression));
}

var input = document.getElementById("ground");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('distance').focus();
    }
});

var input = document.getElementById("distance");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('height').focus();
    }
});

var input = document.getElementById("height");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('wind').focus();
    }
});

var input = document.getElementById("wind");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('degree90').focus();
    }
});

var input = document.getElementById("degree90");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_degree").click(); //enter เพื่อบวกเลข
        document.getElementById('spin').focus();
    }
});

var input = document.getElementById("spin");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('curve').focus();
    }
});

var input = document.getElementById("curve");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อลงไปช่องล่าง
        document.getElementById('px').focus();
    }
});

var input = document.getElementById("px");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_px").click(); //enter เพื่อคิดเลข
        document.getElementById('align-degree').focus();
    }
});

var input = document.getElementById("align-degree");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อคำนวณ
        document.getElementById('slope_break').focus();
    }
});

var input = document.getElementById("slope_break");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อคำนวณ
        document.getElementById('slope_aim').focus();
    }
});

var input = document.getElementById("aim");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.keyCode === 40) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_dis").click(); //enter เพื่อคำนวณ
    }
});


function pbreplace(value) {
    const pb = document.getElementById('r-aim').value;
    const pbx = pb.replace(/[^0-9.]/g, "");
    const copyaim = document.getElementById('copyaim').value;

    if (copyaim == 1) {
        document.getElementById('pbreplace').value = pbx;
        document.getElementById("btn_dis").click();
    } else
        document.getElementById('pbreplace').value = pb;
    document.getElementById("btn_dis").click();
}

function copypb(value) { // copy function
    var copyText = document.getElementById("pbreplace");
    navigator.clipboard.writeText(copyText.value);
}