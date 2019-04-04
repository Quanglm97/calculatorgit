var fs = require('fs');
var txt = require("./text.txt")

function readFile(path){
    return new Promise ((reject,resolve)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function writeFile(path){
    return new Promise ((resolve, reject)=>{
        fs.writeFile(path, data, (err)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        
        })
    })
}

readFile('text.txt').then((result)=> result
).catch((err)=>{
    console.log(err);
})
writeFile('text.txt','Hello world').then((result)=>result
).catch((err)=>{
    console.log(err);
})
