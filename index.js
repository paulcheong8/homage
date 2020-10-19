let express = require('express')
let path = require('path');
let bodyParser = require('body-parser');

let app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get('/', (_req, res) => res.sendFile(path.join(__dirname + '/static/index.html')));


// Launch app to the specified port
app.listen(port, function() {
  console.log("Running on Port "+ port);
});
