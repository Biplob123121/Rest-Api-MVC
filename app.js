const express = require('express');
const cors = require('cors');
const app = express();


// middleware
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/./views/index.html");
});


// Route not found error
app.use((req, res, next) =>{
    res.status(404).json({
        message : "Route not found!"
    });
})

// Server error
app.use((err, req, res, next) =>{
    res.status(500).json({
        message : "something wrong!"
    });
})

module.exports = app;