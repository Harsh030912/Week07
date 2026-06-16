const JWT_SECRET = "s3cret";


app.post("/signin", async function(req, res) { //help to create the post api route
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({ //jo bhi email user bhejta hai usko store karne m use aata hai.
        email: email,
        password: password,
    });

    if (response) {
        const token = jwt.sign({ //token create karta hai.
            id: response._id.toString()
        })

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});