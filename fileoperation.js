var f = require('fs')
f.open('abc.txt','w',function(err,file){
    if(err) throw err
    console.log('file created')
})

f.writeFile('abc.txt',"Welcome in NODE JS file module",function(err,file){
    if(err) throw err
    console.log('file write operation completed')
})

f.appendFile('abc.txt', ' Welcome in React JS', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
f.readFile('abc.txt',function(err, data){
    var array = data.toString().split(" ");
    console.log(data.toString());
    for(i in array) {
        // Printing the response array
        console.log(array[i]);
     }
 })

 f.rename('abc.txt', 'abcnew.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
 f.unlink('abcnew.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
