var fs = require('fs');
var http = require('http');
var colors = require('colors');
var uploadsCounter = 0;

http.createServer(function(request,response){
	var newFile = fs.createWriteStream("uploadedFile.mp4");
	var fileBytes = request.headers['content-length'];
	var uploadedBytes = 0;
	request.pipe(newFile);

	request.on('data', function(chunk){
		uploadedBytes += chunk.length;
		var progress = (uploadedBytes / fileBytes) * 100;
		response.write("progress: "+parseInt(progress, 10) +"%\n");
	});
	request.on('end', function(){
		response.end('SUCESSO!'.green);
	})
	console.log("Recebendo pedido de upload nº: ".yellow+(++uploadsCounter));
}).listen(6666);

console.log("\nAguardando uploads...\n".red);