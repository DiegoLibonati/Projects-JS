const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended: false}));
app.use(express.json()) // El serv va a entender json en React o angular

app.use(require("./routes/index"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () =>{
    console.log("server on port 3000")
})