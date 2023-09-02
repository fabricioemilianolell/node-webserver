require("dotenv").config()
const express = require("express");
const app = express();

    const port = process.env.PORT;


const hbs = require("hbs")
//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials")

//TODO require("hbs")

//Servir contenido estático
//carpeta publica - prioridad
app.use(express.static("public"));


// app.get("/", (req,res) => {
//     res.send("Home page")
// })

//handlebars
app.get("/", (req,res) => {
    res.render("home", {
        nombre: "Fernando Herrera",
        titulo: "Curso de node"
    });
});

app.get("/generic", (req,res) => {
    res.render("generic", {
        nombre: "Fernando Herrera",
        titulo: "Curso de node"
    });
});

app.get("/elements", (req,res) => {
    res.render("elements", {
        nombre: "Fernando Herrera",
        titulo: "Curso de node"
    });
});

//comodín - cualquier ruta
app.get("*", (req,res) => {
    res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, ()=> {
    console.log(`Corriendo en el puerto ${port}`)
});


