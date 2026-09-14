const express = require('express')
const app = express();
app.use((req, res, next) => {
    console.log("Middleware 1 Executed");
    next();
    
})
// app.use((req, res, next) => {
//     console.log("Middleware 2 Executed");
//     next();
    
// })
app.use('/student/:id', (req, res, next) => {
    console.log("Response Type", req.method)
})

app.get('/', (req, res) => {
    res.end("You are at home page")
})

app.listen(5050, () => {
    console.log("Server is listening at port 5050")
})