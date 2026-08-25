const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==="/" && req.method==="POST"){
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            console.log("raw data ", body);
            const user=JSON.parse(body);
            console.log("Parsed data ", user);
            //res.end(body);
        
        res.end(JSON.stringify({  //-->.stringify to return complete data. 
            message:"user created successfully",
            user:user
        }))
    })
// res.end("Hello, World!");            //-->.end means to send the response back to the client and close the connection. It is used to indicate that the server has finished processing the request and is ready to send the response.
    }
    else{
        res.end("Data not found");
    }
})

server.listen(4000,()=>{console.log("server is running")});






// import http from 'http';
// const server = http.createServer((req, res) => {
//     if (req.url === '/users' && req.method === "POST") {
//         let body = '';
//         req.on('data', (chunk) => {
//             body += chunk;
//         });

//         req.on('end', () => {
//             console.log("Raw Data:", body);
//             const user = JSON.parse(body);
//             console.log("User:", user);
//             res.writeHead(200, {
//                 'Content-Type': 'application/json'
//             });
//             res.end(JSON.stringify({
//                 message: "user created successfully",
//                 user: user
//             }));
//         });
//     } else {
//         res.end("hello");
//     }
// });

//     server.listen(3000, () => {
//     console.log("Server running ................");
// });