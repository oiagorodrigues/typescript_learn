"use strict";
// enum are special objects which map enumerables
// in a human readable way.
// They give friendly names to a set of numeric values.
// enum Role { ADMIN, USER }; // will be enumerate starting from 0
// Enums MUST be capitalized.
// But you can give your own value to each member, or change the starting point, like:
// enum Role { ADMIN = 1, USER  }; // this will start in 1 and end in 2
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
})(Role || (Role = {}));
; // this will enumerate to 'ADMIN ' and 'USER'
var sentence;
var userRole = Role.ADMIN;
// we can, even, access the value of the key, when the enum is enumerate with numbers, by using:
// enum Role { ADMIN = 1, USER };
// let role = Role[2] // will assign the string 'USER' to the variable
if (userRole === 'ADMIN') {
    sentence = "I'm the <strong>ADMIN</strong>!";
}
else {
    sentence = "I'm the <strong>USER</strong>.";
}
