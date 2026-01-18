const express = require("express");
const bodyParser= require("body-parser");
const ejs = require("ejs");

const data = require(__dirname+'/data.js');

const app = express();
const items = ["But Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    let date = data.getDate();
    res.render("list", {listTitle: date, newListItem: items});
});

app.post('/', function(req, res){
    let item = req.body.newListItem;
    // console.log(req.body);
    if(req.body.list === 'work'){
        // console.log(req.body);
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get('/work', function(req, res){
    res.render("list", {listTitle: "work", newListItem: workItems});
});
app.get('/about', function(req, res){
    res.render("About");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
