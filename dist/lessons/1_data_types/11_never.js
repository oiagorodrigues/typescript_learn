"use strict";
function generateError(message, code) {
    throw { message, code };
}
generateError('An error ocurred', 500);
