const fs=require('fs');
//const path='./test.txt';
//const data='i am sundaram';
// fs.writeFileSync(path,data);

//fs.writeFileSync('./test.txt','i am sundaram');-->instead of the path and data variable we can directly write the data in the file.
console.log('bye');
fs.writeFile('./test2.txt','using writeFilemethod',(err)=>{//->(err) this is the callback function which is called after the file is written.
    if(err){
        console.log(err);
    }
    console.log('File written successfully');
})