"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    // return "hello";
}
function getUpper(val) {
    console.log(val.toUpperCase());
}
function signUpUser(name, email, isPaid) {
    console.log("User: ".concat(name, " with email: ").concat(email, " -> ").concat(isPaid ? "Is Paid" : "Is Not Paid"));
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("User: ".concat(name, " with email: ").concat(email, " -> ").concat(isPaid ? "Is Paid" : "Is Not Paid"));
};
var myValue = addTwo(5);
getUpper("Pomona");
signUpUser("John", "john@mailchimp.com", true);
loginUser("John", "john@mailchimp.com");
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spiderman", "ironman"];
var getHeroes = function () {
    heroes.map(function (hero) {
        return "Hero is: ".concat(hero);
    });
};
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
