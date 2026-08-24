const http = require('http'); // http is a module which will help us to create a server

//http methods list (GET, POST, PUT(replacement/updation), DELETE, PATCH(replacement/updation), HEAD, OPTIONS, TRACE, CONNECT, PURGE, LINK,)
// http status codes: 1xx informational, 2xx success, 3xx redirection, 4xx client error, 5xx server error

const PORT=4000; // port number on which the server will listen
const server = http.createServer((req, res) => {
    // if (req.url==="/" && req.method==="GET") {
    //     res.end("you are at home page");
    // } else if (req.url==="/Contact" && req.method==="GET") {
    //     res.end("Contact me on Whatsapp")
    // } else {
    //     res.statusCode=404;
    //     res.end("Page not found"); // 404 is the status code for page not found
    // }

    switch(req.url){
        case "/":
            ///res.end("you are at home page");
            const JOKES=
                [
                    {id:1,
                joke:"Why did the scarecrow win an award? Because he was outstanding in his field!"},

                {id:2,
                joke:"Why did the tomato turn red? Because it saw the salad dressing!"},
                
               {id:3,
                joke:"Why did the coffee file a police report? It got mugged!"}

                ]
                res.end(JSON.stringify(JOKES));
            break;
        case "/contact":
            res.end("Contact me on Whatsapp");
            break;
        default:
            res.statusCode=404;
            res.end("Page not found");
    }
})
server.listen(process.env.PORT || 4000, () => {
    console.log("Server is listening on port 4000");
})