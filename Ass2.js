const { log } = require("node:console");
const fs=require("node:fs")
const path=require("node:path")
const os=require("node:os")
const EventEmitter  = require ("node:events")
const event=new EventEmitter()
// //1. Write a function that logs the current file path and directory
// function Filepath(filename){fs.realpath(filename,(err,data)=>{
//     if(err)
//         console.log(err);
        
//     console.log("file:",data);
//     console.log("dir:",path.dirname(data));
    
// });}
// Filepath("./Ass2.js")

//2. Write a function that takes a file path and returns its file name
// function filename(filepath){
//     console.log(path.basename(filepath));
// }
// filename("/user/files/report.pdf")

//3. Write a function that builds a path from an object

// function buildpath({dir= "/folder", name= "app", ext= ".js"}){
// return path.join(dir,name,ext);
// }
// console.log(buildpath({dir: "/folder", name: "app", ext: ".js"}));

//4. Write a function that returns the file extension from a given file path.

// function fileext(filepath){
//     return path.extname(filepath)
// };
// console.log(fileext("/docs/readme.md"));

//5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)

// function parses(filepath){
//     return path.parse(filepath)
// }
// const obj=parses("home/app/main.js")
// console.log("Name:",obj.name ,"Ext:",obj.ext);

//6. Write a function that checks whether a given path is absolute. (0.5 Grade)

// function Abs(filepath){
//     if(path.isAbsolute(filepath))
//         {console.log("true")}
//     else 
//         {console.log("false")};
// }
// Abs("/file.txt")

//7. Write a function that joins multiple segments 

// function joinSegments(...segments){
    
//     return path.join(...segments)
// }
// console.log(joinSegments("src", "components", "App.js"));

//8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)
// function absPath(filepath){
//    return path.resolve(filepath)
// }
// console.log(absPath("Ass2.js"));

//9. Write a function that joins two paths. (0.5 Grade)
// function joinPaths(path1,path2){
//     return path.join(path1,path2)
// }
// console.log(joinPaths("/folder1", "folder2/file.txt"));

//10. Write a function that deletes a file asynchronously. (0.5 Grade)

// function deleteFile(filepath){
//     fs.rm(filepath,(err)=>{
//         if (err) 
//             console.log("Faild",err);
//         else
//         console.log(`the ${filepath} is deleted`);

//     })
// }
// deleteFile("./test.txt")

//11. Write a function that creates a folder synchronously.

// function CreateFolder(dirname){

//     if(!fs.existsSync(dirname)){
//         fs.mkdirSync(dirname)
//         console.log("success");
//     }
//     else
//         console.log(`folder ${dirname} already exist`);
        
// }
// CreateFolder("test")

//12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
// event.on("start",()=>{
//     console.log(`welcom to emit`);
    
// })
// event.emit("start")

//13. Emit a custom "login" event with a username parameter. (0.5 Grade)
// event.on("login",(username)=>{
//     console.log(`welcom ${username}`);
    
// })
// event.emit("login","zeyad")
//14. Read a file synchronously and log its contents. (1 Grade)
// function readFs(filename){
//   const content= fs.readFileSync(filename)
//   console.log(`file content => ${content}`);
// }
// readFs("./test.txt")

//15. Write asynchronously to a file. (1 Grade)
// function writeAsy(filepath,content){
//     fs.writeFile(filepath,content,(err)=>{
//         if(err)
//             console.log(err);
//         else
//             console.log("write successfull");
//     })
// }
// writeAsy("./test.txt","Async Save")

//16. Check if a directory exists. (0.5 Grade)

// function checkExists(dirname){
//     if(fs.existsSync(dirname))
//         console.log("true");
//     else
//         console.log("false");
// }
// checkExists("./../Assignments")

//17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)

// function getOSInfo(){
//     return {
//         platform: os.platform(),
//         arch: os.arch()
//     }
// }
// console.log(getOSInfo());

