const express=require('express');
const app=express();


// app.get('/rectangle/area',(req,res)=>{
//     const length=parseInt(req.query.length);
//     const width=parseInt(req.query.width);
//     const area=length*width;
//     if(width<=0 || length<=0){
//         res.status(400).json({message:"length and width should be greater than 0"});
//     }
//     res.send(`area of rectangle is:  ${area}`);
// })

const areaRectangleRoutes=require('./routes/area_rectangle');
app.use(express.json());
app.use('/area',areaRectangleRoutes);
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})


