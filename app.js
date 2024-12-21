const express=require("express");
const app=express();
const jsonData = require('./MOCK_DATA.json');
app.get("/",(req,res)=>{
   function searchById(id) {
      return jsonData.find(item => item.id === id);
  }
  const idToSearch = 50; 
  const result = searchById(idToSearch);
  
  if (result) {
   res.send(result);
  } else {
      console.log('Object not found with id:', idToSearch);
  }
})
app.get("/all",(req,res)=>{
   res.send(jsonData);
})
app.listen(8080,()=>{
   console.log("listening on port 8080");
})