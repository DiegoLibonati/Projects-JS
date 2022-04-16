const {Router} = require("express");
const router = Router();

router.post("/send-email", (req, res) =>{
    const {name, email, phone, message} = req.body;

    contentHtml = `
    <h1>user Information</h1>
    <ul> 
    <li> Username: ${name}</li>
    <li> User Email: ${email}</li>
    <li> Phone: ${phone}</li>
    </ul>

    <p> ${message} </p>
    `;

    res.send("recibido");
});

module.exports = router;