const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const livrosRoutes = require("./routes/livrosRoutes")
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/livros', livrosRoutes);

app.listen(port, () => {
    console.log("server iniciado")
})