const fs=require('fs');
filepath='./test.txt';
const res=fs.readFileSync(filepath,'utf-8');
fs.writeFileSync('./test3.txt',res);//-->this will write the data read from test.txt to test3.txt file.