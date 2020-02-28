"use strict";
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('An error ocurred', 500);
