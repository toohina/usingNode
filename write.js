const fs=require('fs');

fs.writeFile("message.txt","Hi, I am Toohina!",(err)=>{
    if (err) throw err;
    console.log("The file has been saved!");
});