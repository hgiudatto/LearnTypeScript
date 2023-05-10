"use strict";
exports.__esModule = true;
var User = {
    name: "Hector",
    email: "hector@mailchimp.com",
    isActive: true
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
createUser({ name: "Hector", isPaid: true });
var createCourse = function () {
    return { name: "reactjs", price: 399 };
};
var createUserAlias = function (user) {
    return { name: "", email: "", isActive: false };
};
createUserAlias({ name: "", email: "", isActive: false });
