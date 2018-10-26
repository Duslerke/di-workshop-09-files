console.log('your code here')

var fs = require('fs');
var fileContents = fs.readFileSync('./shopping-basket.json', 'utf-8');


var data = JSON.parse(fileContents);
// console.log(data);

var total = 0;

for (var item of data.basket) {
    if (item.name == "Candles") {
        item.quantity = 10;
    }
    total += item.quantity*item.price;

    console.log(item.name, ': ' , item.quantity*item.price , '$');
}

console.log('total: ' + total + '$');

var jsonString = JSON.stringify(data, null, 2);
// var jsonString = JSON.stringify(data); //more diffucult to read

// console.log(jsonString);
