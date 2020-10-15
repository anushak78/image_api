var cors = require("cors");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
fs = require('fs');
var moment = require('moment');

app.use(cors());
app.options('*', cors());

app.listen(2000, () => {
 console.log("Server running on port 2000");
});

app.post("/save", function (req, res) {
    console.log(req.body);
    var data = req.body.image.replace(/^data:image\/png;base64,/, "");
    fs.writeFile(req.body.candidate_id+"_"+ req.body.type+"_"+moment().format('yyyy-mm-dd:hh:mm:ss')+ ".png", data, 'base64', function(err) {
		console.log('err',err);
    });
    res.send({
        code: 1,
        message: 'success'
    })
});
