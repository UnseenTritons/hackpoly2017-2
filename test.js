var input;

//https://api.wolframalpha.com/v2/query?input=nutrition+2+slices+of+swiss+cheese&format=cell,image&output=JSON&appid=QXJVKJ-AYKET9JWPK

var host = 'https://api.wolframalpha.com/v2/query?input=nutrition+';
var input = '2+slices+of+swiss+cheese'
var format = 'image&'
var output= 'JSON&'
var appId= 'QXJVKJ-AYKET9JWPK'
var address = host+input+'&format='+format + '&output=' + output + '&appid=' + appId
var imgsrc="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";


console.log(address);
 var request = require('request');
 request(address, function (error, response, body) {
   if (!error && response.statusCode == 200) {
      myObj = JSON.parse(body);
      imgsrc = myObj.queryresult.pods[1].subpods[0].img.src;
     console.log(imgsrc)
     //document.getElementById("demo").innerHTML = imgsrc;
 // Show the HTML for the Google homepage.


 // Load the http module to create an http server.
 var http = require('http');

 // Configure our HTTP server to respond with Hello World to all requests.
 var server = http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

   html="<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01//EN' 'http://www.w3.org/TR/html4/strict.dtd'>";
         html+="<html><head><title>"+"YESSSSS"+"</title></head><body>";
         //"We are the so-called \"Vikings\" from the north."
         html+="<img src=\""+imgsrc+"\">";
         html+="</body></html>";

   response.end(html);
 });

 // Listen on port 8000, IP defaults to 127.0.0.1
 server.listen(8000);

 // Put a friendly message on the terminal
 console.log("Server running at http://127.0.0.1:8000/");


   }
 })
