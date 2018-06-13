var x = 0;
var s = "";

console.log("Mi primer Java script");

var theForm = document.getElementById("theform");
theForm.hidden = true;

var button = document.getElementById("BuyButton");
button.addEventListener("click", function () {
    console.log("Buying Item");
})
var productInfo = document.getElementByClassName("Propiedades");
var ListItems = productInfo.item[0].children;


