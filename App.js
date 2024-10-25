const express = require("express");

const app = express();
const {engine} = require("express-handlebars");
const path = require("path")
const mainPageRote = require("./routes/mainPage")
const multiply = require("./helpers/hbs/multiply")
const iterate = require("./helpers/hbs/iterateWithNumbers")
const isNotNull = require("./helpers/hbs/moreOrLess")


app.engine("hbs", engine({
    helpers:{
        multiply: multiply,
        iterate: iterate,
        isNotNull: isNotNull,
    }
}));
app.set("view engine", "hbs");

app.set("views","views")
let num = 0;

app.use(mainPageRote)

app.use(express.static(path.join(__dirname,"public")));
app.use( function(req, res, next){
num = Math.floor(Math.random() * 5) + 1;
next();
});



    
app.listen(8000)