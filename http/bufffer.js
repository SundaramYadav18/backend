const buffer=Buffer.from("HelloWorld")
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const buffer1=Buffer.alloc(20);//-->using this we can create a buffer of 20 bytes and it will be filled with 0's. i.e.it will have fixed size of 20 bytes and it will be filled with 0's.
console.log(buffer1);
console.log(buffer[2]);//-->this will give the ascii value of the character at index 2 in the buffer.
console.log(String.fromCharCode(buffer[2]));
