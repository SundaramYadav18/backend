const fs=require('fs');
filepath='./test.txt';
const res=fs.readFileSync(filepath,'utf-8');
console.log(res);

fs.readFile(filepath,'utf-16le',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
});