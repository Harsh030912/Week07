const jwt = require("jsonwebtoken"); //imports the jsonwebtoken package
const JWT_SECRET = "s3cret";

function auth(req, res, next) { //create the middleware 
    const token = req.headers.authorization;

    const response = jwt.verify(token, JWT_SECRET); //use to checks whther the token is valid,or uses the secret key to verify the token.
    if (response) {
        req.userId = token.userId;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}
module.exports = {
    auth,
    JWT_SECRET
}