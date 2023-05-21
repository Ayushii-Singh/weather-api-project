const express = require('express');
const app = express();
const port = process.env.PORT ||8000;
const path = require('path');
const hbs = require('hbs');


const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// routing
app.get('/',(req,res) =>{
    // res.send("<h1>Welcome to Ayushi's Page</h1> ");
    res.render("index");
});


app.get('/about',(req,res) =>{
    // res.send("<h1>Welcome to Ayushi's About Page</h1> ");
    res.render("about");
});


app.get('/weather',(req,res) =>{
    // res.send("<h1>Welcome to Ayushi's Weather Page</h1> ");
    res.render("weather");
});

app.get('/*',(req,res) =>{
    // res.send("<h1>Oops!! 404 error </h1> ");
    res.render("404error",{
        errormsg: "Oops! why are you here?"
    });
});

app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
})