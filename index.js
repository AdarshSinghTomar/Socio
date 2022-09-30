const express= require('express');
const app=express();
const port=8080;
console.log ("server is running")


app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in running the server${err}`);
    }
     console.log(`Server is running on port ${port} `);

})