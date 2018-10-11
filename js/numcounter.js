var num = 0;
$().ready(function () {
    display(num);
    $("#inc").click(function () {
        display(++num);            
    });
    $("#dec").click(function(){
        display(--num);
    });
});