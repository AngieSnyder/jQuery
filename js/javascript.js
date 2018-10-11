$().ready(function () {
    $("button").click(function () {
        var inputValue = $("#txt").val();
        $("label").text(inputValue);

    })
});

// function loaded() {
//     document.getElementById("lbl").innerHTML = "Angie";
// }
// function clicked() {
//     var inputCrtl = document.getElementById("txt");
//     var inputValue = inputCrtl.value;
//     console.log("the value is", inputValue);
//     // this is a comment
//     var labelCtrl = document.getElementById("lbl");
//     labelCtrl.innerText = inputValue;
// }