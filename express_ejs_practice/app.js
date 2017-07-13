var express = require('express');
var app = express();
//var url = require('url');
//var url_parts = url.parse(request.url, true);
//var query = url_parts.query;

var list = [];
app.get('/', function(req, res) {
    
    var newItem = req.query.listItem;
    if(newItem != undefined)
        list.push(newItem);
    res.render('list.ejs', {myListItems: list});
});

app.listen(8080);

console.log('Server running at http://127.0.0.1:8080/');