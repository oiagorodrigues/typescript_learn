"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
})(Role || (Role = {}));
;
let sentence;
let userRole = Role.ADMIN;
if (userRole === 'ADMIN') {
    sentence = `I'm the <strong>ADMIN</strong>!`;
}
else {
    sentence = `I'm the <strong>USER</strong>.`;
}
