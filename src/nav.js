const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req , res) => {
      res.send("welcome to my home page...");
})

app.get('/about', (req , res) => {
    res.status(200).send("welcome to my about page...");
})

app.get('/contact', (req , res) => {
    res.status(200).send("welcome to my contact page...");
})

app.get('/temp', (req , res) => {
    res.send([
        {
          id : 1,
          name : "vinod", 
        },
        {
            id : 2,
            name : "thapa", 
        },
        {
            id : 3,
            name : "technical", 
        },
        {
            id : 4,
            name : "developer", 
        }
]);
})

app.listen(port , () => {
    console.log(`listening to the port number ${port}`);
});

