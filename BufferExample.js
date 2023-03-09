buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
console.log(buf.toString())
console.log("Octets written : "+  len);
