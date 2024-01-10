const express = require("express");
const path = require('path');
const app = express();
const port = 8080;

// built-in middleware

console.log(path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, "../templates");

// app.use(express.static(staticPath));

// to set the view engine
app.set('view engine', 'hbs');
app.set('views', templatePath);

// template engine route

app.get("", (req, res) => {
    res.render('index', {
        channelName : "vinod bahadur thapa",
    });
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get("/", (req, res) => {
    res.send("hello from the express server...");
})

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})
