const http=require('http');
const fs=require('fs');

const PORT=4000;

const server=http.createServer((req,res)=>{
    console.log(req.headers);

    const resu=fs.appendFile('./new.txt',"hello world",(err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log("data appended successfully");
        }
        res.end("Headers received");
    });

})
server.listen(PORT, () => {
    console.log("Server is listening on port 4000");
});