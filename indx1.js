var express = require('express');
var app = express();

app.get('/things/:id', function(req, res) {
   res.send(req.params.id );
});
app.listen(3000);
