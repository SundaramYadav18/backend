const express = require('express');
const app=express(); //--> this line is equivalent to http.create Server;
app.use(express.json()); //--> creating middleware -->this line is used to parse the incoming request body in JSON format
// app.get("/",(req,res)=>{
//     res.send("you are at home page");
// })

let student=[
    {
        id:1,
        name:"Sundaram",
        age:22,
        course:"btech"
    },
    {
        id:2,
        name:"vedansh",
        age:21,
        course:"btech"
    },
    {
        id:3,
        name:"yatin",
        age:62,
        course:"btech"
    },
    {
        id:4,
        name:"tarun",
        age:28,
        course:"btech"
    },
    
]
app.get("/students",(req,res)=>{
    res.json(student);
})
app.get("/students/:id",(req,res)=>{
    // console.log(req.params.id);
    const id=parseInt(req.params.id);
    const studentData=student.find((stud)=>stud.id==id);
    if(studentData){
        res.json(studentData);
    }else{
        return res.status(404).json({message:"Student not found"});
    }
})
app.post("/students",(req,res)=>{
    const newstudent=
        {
            id:student.length+1,
            name:req.body.name,
            age:req.body.age,
            course:req.body.course
        }

    student.push(newstudent);
    res.status(201).json({message:"Student added successfully",student:newstudent});
})
app.delete("/students/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const studentIndex=student.findIndex((stud)=>stud.id==id);
    if(studentIndex!==-1){
        student.splice(studentIndex,1);
        res.json({message:"Student deleted successfully"});
    }else{
        return res.status(404).json({message:"Student not found"});
    }
})

// if you wan to change the only particular detail of student then use patch method
app.put('/students/:id', (req, res) => {
    const id=parseInt(req.params.id)
    const stud = student.find(student => student.id === id);
    if (!stud) {
        return res.status(404).json({
            message:"Student not found"
        })
    }
    stud.name=req.body.name;
    stud.age = req.body.age;
    res.json({
        message: "Student updated"
    })
})

// if you wan to change the only particular detail of student then use patch method
app.patch('/students/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const stud = student.find(student => student.id === id);
    if (!stud) {
        return res.status(404).json({
            message:"Student not found"
        })
    }
    if (req.body.name !== undefined) {
        stud.name = req.body.name;
    }
    if (req.body.age !== undefined) {
        stud.age = req.body.age;
    }
    res.json({
        message: "Student updated"
    })
    
})

app.get('/search',(req,res)=>{
    const course=req.query.course
    const age=req.query.age 
    //const name=req.query.name
    const stud=student.filter(s=>s.course.toLowerCase()===course.toLowerCase() && s.age===Number(age))
    res.json(stud)
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})
