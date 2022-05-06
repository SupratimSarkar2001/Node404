

const mongoose= require("mongoose")
//connecting to our alraedy present database
mongoose.connect('mongodb://localhost/demodatabse').then(()=>{
    console.log("Connected")
}).catch((e)=>{
    console.log(e)
});

//creation of a schema
const BlogSchema= new mongoose.Schema({
    author:String,
    title:String,
    body:String,
    date:{
        type:Date,default:Date.now
    }
})

//creating a collection
const Blog=mongoose.model("Blog",BlogSchema);

//insert a document
const createDocument = async ()=>{
 try{
    const NodeBlog= new Blog({
        author:"Supratim",
        title:"React Tutorial",
        body:"Its the best React tutorial",
    
    })
    const res = await NodeBlog.save();//help to save this document in the collection
    console.log(res);
}
catch(e){
    console.log(e);
}
}

createDocument();


