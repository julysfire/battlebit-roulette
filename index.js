const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening
const fs = require('fs');

app.use(express.static('public'));

app.get('/', (req, res) => {                                    //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});              //server responds by sending the index.html file to the client's browser
                                                                //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

//Get data from JSON 
app.get("/data", async (req, res) => {
    try{
        data = fs.readFileSync('./public/json/data.json',  "utf8");
    } catch (err) {
        console.error(err);
    }
    res.json(data);
});


app.get("/valid", async (req, res) => {
    try{
        data = fs.readFileSync('./public/json/valid.json',  "utf8");
    } catch (err) {
        console.error(err);
    }
    res.json(data);
});

app.listen(port, () => {                                        //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening at http://localhost:${port}`); 
});