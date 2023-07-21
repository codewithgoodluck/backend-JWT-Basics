const authenticationMiddleWare = require("../middleware/auth");
const Unauthenticated = require("./authenticated");
const BadRequest = require("./bad-request");
const CustomAPIError = require("./custom-error");

module.exports={
    Unauthenticated,
    BadRequest,
    CustomAPIError
}