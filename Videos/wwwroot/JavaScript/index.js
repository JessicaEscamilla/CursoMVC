$Cdocument).ready(function () {
    var x = 0;
    var s = "";

    console.log("Mi primer Java script");

    var theForm = $("#theform");
    theForm.hide();

    var button = $("#BuyButton");
    button.on("click", function () {
        console.log("Buying Item");
    })
    var productInfo = $(".Propiedades li");
    productInfo.on("click", function () {
        console.log("you clicked on " + $(this).text());
    })

});

