const express  = require('express')
     ,app = new express()
     ,port = process.env.PORT || 3000;

app.get('/',function(req,res){
   res.end("success!");
})

app.use(express.static(__dirname + '/dist/en'));


app.listen(port,function(){
	console.log('the server is running at port:'+port);
});
