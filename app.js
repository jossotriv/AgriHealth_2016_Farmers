/**
 * Created by Bever on 11/3/2016.
 */
var heart = 0, temperature = 0;

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()){

    }
}
var end = 480;
 var printVitals = function() {
     // for(var c = 0; c < end; c++) {
         var fs = require('fs');
         fs.readFile('logs.txt', 'utf-8', function (err, data) {
             var position1 = data.search("Beat: ");
             var position2 = data.search("Body");
             var heartbeat = data.substring((position1 + 6), position2);
             console.log(heartbeat);

             var position3 = data.search("ure: ");
             var position4 = data.search("Caution");
             var bodyTemp = data.substring(position3 + 5, position4);
             console.log(bodyTemp);

             var condition = data.substring(position4);
             console.log(condition);

             sleep(900);

         }
      }


// var test = 1;
for(var c = 0; c < end; c++) {
    printVitals();
}


//Print to website
// function readFile() {
//     jQuery.get('logs.txt', function(txt){
//         $('#output').text(txt);
//     });
// }
