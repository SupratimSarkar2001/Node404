const mongoose=require("mongoose");

//connect with mongodb and as the 'mydata' is not present so it gonna create mydata
mongoose.connect("mongodb://localhost/mydata").then(()=>{console.log("Connected")}).catch((e)=>{
    console.log(e)
})

//in order to add collections we need first a schema 
const myschema= new mongoose.Schema({
    Name:String,
    Age:Number,
    Bio:String,
    Date:{
        type:Date,
        default:Date.now
    }
})

//create a collection
const Mycoll= mongoose.model("Mycoll",myschema);

const createDocument=async ()=>{
    try{
        const NodeMy=new Mycoll({
            Name:"Supscss",
            Age:16,
            Bio:"Node2ss"
        })
        const ReactMy=new Mycoll({
            Name:"LSup2s",
            Age:5,
            Bio:"React6aa"
        })
        const ExpresstMy=new Mycoll({
            Name:"HSups3",
            Age:42,
            Bio:"Express4s"
        })
    
        const res= await Mycoll.insertMany([NodeMy,ReactMy,ExpresstMy])
    }catch(e){
        console.log(e)
    }
 
}

// createDocument() //--> in order to create document

//fetch document
const getDocumet =async ()=>{
   const  res= await Mycoll.find({Name:"Sup2"},{Name:1});
   const  res2= await Mycoll.find({Name:"Sup2"}).select({Name:1});
   const  res3= await Mycoll.find().limit(3).skip(2);
   console.log(res3);
}
// getDocumet() --> query 1.

//comparison operator

// 1.$eq
// 2.$neq
// 3.$gt
// 4.$lt
// 5.$gte
// 6.$lte
// 7.$in
// 8.$nin

const getDocumet2=async ()=>{
    const res= await Mycoll.find({Age:{$gte:16}}).select({Name:1})
    const res2= await Mycoll.find({Age:{$ne:16}}).select({Name:1})
    const res3= await Mycoll.find({Age:{$in:[16,12]}}).select({Name:1})
    console.log(res3)
}
// getDocumet2();

//logical operator 
//and
//not
//nor
//or

const getDocumet3= async ()=>{
    const res= await Mycoll.find({$and:[{Age:12},{Bio:"React"}]}).select({Name:1})
    console.log(res);
}
// getDocumet3();

//count document
const getDocumet4=async()=>{
    const res=await Mycoll.find({Age:12}).countDocuments();
    console.log(res);
}
// getDocumet4()

//sort documunt
//1--> accending
//-1--> decending
const getDocumet5= async()=>{
    const res=await Mycoll.find().select({Name:1,_id:0}).sort({Name:-1});
    console.log(res)
}
// getDocumet5()

//update querys
const updateDocument= async (id)=>{
    const res=await Mycoll.updateOne({_id:id},{$set:{Name:"Supratim"}})
    console.log(res);
}

// updateDocument("6273df2f7599223fe4fb28ff");

const updateDocument2=async ()=>{
    const res=await Mycoll.updateMany({Age:12},{$set:{Age:18}})
    console.log(res);
}

// updateDocument2()

const updateDocument3=async (id)=>{
    const res=await Mycoll.findByIdAndUpdate({_id:id},{Name:"Supratim Sarkar Again"},{new:true})
    console.log(res);
}

// updateDocument3("6273df2f7599223fe4fb2900")

//delete Qiary
const deleteDocument=async()=>{
    const res=await Mycoll.deleteOne({Age:42});
    console.log(res);
}

// deleteDocument();

const deleteDocument2= async ()=>{
    const res=await Mycoll.deleteMany({Bio:"Node"});
    console.log(res);
}

deleteDocument2();