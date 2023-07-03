window.onload = initfunction;

function initfunction() {

    var infoHeight = document.getElementById('gridItem1').clientHeight;
    document.getElementById("redBox").style.top = ((infoHeight) * -1) + "px";
    //alert(infoHeight+" "+BoxHeight);
    var element = document.getElementById('redBox'),
        style = window.getComputedStyle(element),
        top = style.getPropertyValue('top');

    var infoWidth = document.getElementById('gridItem4').clientWidth;

    document.getElementById("redBox2").style.right = ((infoWidth) * -1) + "px";
    document.getElementById("redBox").style.transition = "top 1.5s ease-in-out";
    document.getElementById("redBox").style.opacity = "1";
    document.getElementById("redBox").style.top = ((0)) + "px";
}

const BASE_PRICE_OF_SHEET_CAKE = 18;
const BASE_PRICE_OF_ROUND_CAKE = 15;
const BASE_SIZE_OF_SHEET_CAKE = 900;
const BASE_SIZE_OF_ROUND_CAKE = 707;
const CREAM_CHEESE_ICING_PRICE = 5;
const FRUIT_AND_ALMONDS_PRICE = 7;
const FRUIT_AND_JAM_PRICE = 4;
const CAKE_ADDITIONAL_PRICE = .02;
const CAKE_LEVEL_MULTIPLIER = .5;

function slideup() {
    var infoHeight = document.getElementById('gridItem1').clientHeight;
    document.getElementById("redBox").style.top = ((infoHeight) * -1) + "px";
}

function slidedown() {
    document.getElementById("redBox").style.top = ((0)) + "px";
}

function slideleft() {
    document.getElementById("redBox2").style.right = ((0)) + "px";
}

function slideright() {
    var infoWidth = document.getElementById('gridItem4').clientWidth;
    document.getElementById("redBox2").style.right = ((infoWidth) * -1) + "px";
}

function backToStart() {
    document.getElementById("infoBox1").style.display = "flex";
    document.getElementById("roundCake").style.display = "none";
    document.getElementById("sheetCake").style.display = "none";
    document.getElementById("myForm1").reset();
    document.getElementById("myForm2").reset();
    document.getElementById("myForm3").reset();
    slidedown();
    slideright();
}


function buttonandchecks() {
    slideup();

    setTimeout(function () {
        var caketype = document.querySelector('input[name="caketype"]:checked').value;
        if (caketype == "Sheet cake") {
            document.getElementById("infoBox1").style.display = "none";
            document.getElementById("sheetCake").style.display = "flex";
        } else {
            document.getElementById("infoBox1").style.display = "none";
            document.getElementById("roundCake").style.display = "flex";
        }
        slidedown();
    }, 1700);
}

function buttonandchecks2() {
    var message = "";
    var resultmessage = "";
    var cakePrice = 0;
    var toppingPrice = 0;

    var customerName = (document.getElementById("fname").value + " " + document.getElementById("lname").value);
    var customerAddress = document.getElementById("address").value;
    var customerPC = document.getElementById("pcode").value;
    var customerPhone = document.getElementById("tel").value;
    var customerEmail = document.getElementById("email").value;
    var caketype = document.querySelector('input[name="caketype"]:checked').value;

    resultmessage = "<h1>" + customerName + "</h1>" + customerAddress + "<br>" + customerPC + "<br>" + customerPhone + "<br><a href='mailto:'" + customerEmail + "'>  " + customerEmail +
        "</a><br><br><h1>Your Order</h1><table>";

    if (caketype == "Sheet cake") {
        var length = document.getElementById("length").value;
        var width = document.getElementById("width").value;
        var level = document.getElementById("slevel").value;
        var diffPrice = (((length * width) - BASE_SIZE_OF_SHEET_CAKE) * CAKE_ADDITIONAL_PRICE);

        cakePrice += BASE_PRICE_OF_SHEET_CAKE + diffPrice;
        if (level == 2) {
            cakePrice += (cakePrice * CAKE_LEVEL_MULTIPLIER);
        }
        if (level == 3) {
            cakePrice += (cakePrice * (CAKE_LEVEL_MULTIPLIER * 2));
        }

        message = "<tr><td>" + caketype + " " + length + " x " + width + " cms with " + level + " layers:</td><td>$" + (cakePrice.toFixed(2)) + "</td></tr>";
        if (document.getElementById("screamCheese").checked) {
            message += "<tr><td> Cream Cheese icing</td><td>$" + CREAM_CHEESE_ICING_PRICE + "</td><tr>";
            toppingPrice += CREAM_CHEESE_ICING_PRICE;
        }
        if (document.getElementById("sfruitAndAlmonds").checked) {
            message += "<tr><td> Fruit and Almond topping</td><td>$" + FRUIT_AND_ALMONDS_PRICE + "</td><tr>";
            toppingPrice += FRUIT_AND_ALMONDS_PRICE;
        }
        if (document.getElementById("sfruitJam").checked) {
            message += "<tr><td> Fruit Jam fillinf</td><td>$" + FRUIT_AND_JAM_PRICE + "</td><tr>";
            toppingPrice += FRUIT_AND_JAM_PRICE;
        }
        message += "<tr><td>Total:</td><td>$" + ((cakePrice + toppingPrice).toFixed(2)) + "</td></tr>";
    }

    if (caketype == "Round cake") {
        var radius = document.getElementById("radius").value;
        var level = document.getElementById("rlevel").value;
        var diffPrice = (((radius * radius * 3.14) - BASE_SIZE_OF_ROUND_CAKE) * CAKE_ADDITIONAL_PRICE);

        cakePrice += BASE_PRICE_OF_ROUND_CAKE + diffPrice;
        if (level == 2) {
            cakePrice += (cakePrice * CAKE_LEVEL_MULTIPLIER);
        }
        if (level == 3) {
            cakePrice += (cakePrice * (CAKE_LEVEL_MULTIPLIER * 2));
        }

        message = "<tr><td>" + caketype + " " + radius + " cms with " + level + " layers:</td><td>$" + (cakePrice.toFixed(2)) + "</td></tr>";
        if (document.getElementById("rcreamCheese").checked) {
            message += "<tr><td> Cream Cheese icing</td><td>$" + CREAM_CHEESE_ICING_PRICE + "</td><tr>";
            toppingPrice += CREAM_CHEESE_ICING_PRICE;
        }
        if (document.getElementById("rfruitAndAlmonds").checked) {
            message += "<tr><td> Fruit and Almond topping</td><td>$" + FRUIT_AND_ALMONDS_PRICE + "</td><tr>";
            toppingPrice += FRUIT_AND_ALMONDS_PRICE;
        }
        if (document.getElementById("rfruitJam").checked) {
            message += "<tr><td> Fruit Jam fillinf</td><td>$" + FRUIT_AND_JAM_PRICE + "</td><tr>";
            toppingPrice += FRUIT_AND_JAM_PRICE;
        }
        message += "<tr><td>Total:</td><td>$" + ((cakePrice + toppingPrice).toFixed(2)) + "</td></tr>";
    }

    resultmessage += message;

    resultmessage += "</table><br><input type='submit' value='Reset' onClick='backToStart(); return false;'>";
    slidedown();

    slideup();
    slideleft();
    document.getElementById("infoBox2").innerHTML = resultmessage;
}

