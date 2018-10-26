console.log('your code here')

var fs = require('fs')
// var b = ['g','o','o','g','l','e',' ', 'i','t']

var fileContents = fs.readFileSync('./names.txt', 'utf-8');
// console.log(fileContents);
// console.log(a);

function spell (...word) { // joins characters into an array
    var letters = word;
    return letters;
}



// f=spell(...'google'); //splits into characters with no array

// console.log(f);
a = fileContents.split("\r\n");


for (let i=0; i<a.length; i++) {
    var fileName = a[i];
    var fileContent = spell(...a[i]);
    fileContent.reverse();
    fileContent = fileContent.join(''); //separator

    fs.writeFileSync('./'+ fileName +'.txt', fileContent, 'utf-8');
}

a.reverse();


// function newlineJoin (arruy, separat) { //I wrote my own function
//     var singleString="";
//     for (var i=0; i<arruy.length; i++) {
//         singleString = singleString + arruy[i]+separat;
//     }
//     return singleString;
// }

// var c = newlineJoin(a, "\n");

d = a.join('\r\n'); //separator


// console.log( d );

// fs.writeFileSync(nameOfFile, fileContents, fileEncoding)
fs.writeFileSync('./names.txt', d, 'utf-8');

