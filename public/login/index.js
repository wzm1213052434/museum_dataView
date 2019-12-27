const initBlocks = function () {
    var backArea = $("#backArea");
    for (let i = 0; i < 3; i++) {
        let left = Math.random() * 100 + "%";
        let top = Math.random() * 100 + "%";
        let style = "left:" + left + "; top:" + top + ";";
        let tempELement = "<div  class='unangular-rectangle'  style='" + style + "'><div></div><div></div></div>";
        backArea.append(tempELement);
    }
    for (let i = 0; i < 2; i++) {
        let left = Math.random() * 100 + "%";
        let top = Math.random() * 100 + "%";
        let style = "left:" + left + "; top:" + top + ";";
        let tempELement = "<div  class='long-rectangle'  style='" + style + "'></div>";
        backArea.append(tempELement);
    }
    for (let i = 0; i < 2; i++) {
        let left = Math.random() * 100 + "%";
        let top = Math.random() * 100 + "%";
        let style = "left:" + left + "; top:" + top + ";";
        let tempELement = "<div  class='rectangle'  style='" + style + "'></div>";
        backArea.append(tempELement);
    }
}
const moveBlocks = function () {
    $(".rectangle").each(function () {
        $(this).animate({ left: (Math.random() * 100) + '%', top: (Math.random() * 100) + "%" }, Math.random() * 5000);
    })
    $(".long-rectangle").each(function () {
        $(this).animate({ left: (Math.random() * 100) + '%', top: (Math.random() * 100) + "%" }, Math.random() * 5000);
    })
    $(".unangular-rectangle").each(function () {
        $(this).animate({ left: (Math.random() * 100) + '%', top: (Math.random() * 100) + "%" }, Math.random() * 5000);
    })
    setTimeout(function () {
        moveBlocks();
    }, 1000)
}
var validate = function () {
    let res = true;
    if (!$("#name").val()) {
        $("#errorName").fadeIn();
        res = false;
    }
    if (!$("#password").val()) {
        $("#errorPassword").fadeIn();
        res = false;
    }
    return res;
}
const send = function () {
    $("#send").click(function () {
        let res = validate();
        if (res) {
            window.location.href = "../"
        }
    })
}

$(document).ready(function () {
    initBlocks();
    moveBlocks();
    send();
})
