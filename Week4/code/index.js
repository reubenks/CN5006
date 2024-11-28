//imports the express core module and creates the web server
var express=require("express")
var fs= require("fs")
var server=express()

//adds middleware function for bodyparsing
var bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({extended:true}));

//uses the get function to send the user a message
server.get('/',function(req,res)
{
    res.send("Hello this is my first express app")
})

server.listen(5001,function(req,res)
{
    console.log("Server is running on port 5001")
})


//creates a new url called about
server.get('/about',function(req,res)
{
    res.send('this is a basic express app')
})

//creates a new url and prints the paramaters in the url with userid and bookid
server.get("/users/:userid/books/:bookid", function(req,res)
{
    res.send(req.params)
})

//creates a new url that reads and prints the data in the json
server.get("/getstudents", function (req,res)
{
    studentdata={}
    fs.readFile(__dirname + '/' + 'Student.json', 'utf8', function (err, data)
{
    console.log(data)
    res.json({  
                "status":true, 
                "Status_code":200,
                "requested at":req.localtime,
                "requrl":req.url,
                "request Method":req.method, 
                 "Student Data":JSON.parse(data)
            })
})
})

server.get('/GetStudentid/:id', (req,res)=>
    {
        studentdata={}
        fs.readFile(__dirname + '/' + 'Student.json', 'utf8', function (err, data)
        {
            var students = JSON.parse(data)
            var student=students["Student"+req.params.id]
            console.log("student",student)
            if(student)

            res.json(student)
            else
            res.json
                ({
                    "status":true, 
                    "Status_code":200,
                    "requested at":req.localtime,
                    "requrl":req.url,
                    "request Method":req.method, 
                     "Student Data":JSON.parse(data) 
                })
        })

    })

server.get('/StudentInfo',function(req,res)
{
    res.sendFile('StudentInfo.html',{root:__dirname})
})

server.post('/submit-data', function(req,res)
{
    var name = req.body.firstName+' '+req.body.lastName+' '
    var Age = req.body.myAge+' Sex '+req.body.gender+' '

    Qual = 'Qualification'+req.body.Qual
    console.log(req.body.Qual)
    res.send
    ({
        status:true,
        message:'form details',
        data: 
        {
            name:name,
            age:Age,
            Qualification:Qual,
        }
    })
})