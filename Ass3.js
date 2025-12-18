const fs = require("node:fs");
//const rs = fs.createReadStream("test.txt", {
//  encoding: "utf-8",
//});
//const ws = fs.createWriteStream("zipedfile.txt.gz");
//const zlip = require("node:zlib");
//1. Use a readable stream to read a file in chunks and log each chunk.
// rs.on("data",(chunk)=>{
//     console.log(chunk);
//     console.log("-".repeat(100));
// })

//Use readable and writable streams to copy content from one file to another.
// rs.on("data",(chunk)=>{
//     ws.write(chunk);
//     console.log("File copied using streams");
// })
//or
// rs.pipe(ws,console.log("File copied using streams"))

//3. Create a pipeline that reads a file, compresses it, and writes it to another file.
// const gzip=zlip.createGzip()
// rs.pipe(gzip).pipe(ws,console.log("file compressed"))
//Create an API that adds a new user to your users stored in a JSON file. (ensure that the email of the new user doesn’t exist before)URL: POST /user
// const http = require("node:http");
// const port = 5000;
// let arrusers = [
//   {
//     id: 1,
//     name: "user1",
//     age: 20,
//     email: "user1@email.com",
//   },
//   {
//     id: 2,

//     name: "user2",
//     age: 30,
//     email: "user2@email.com",
//   },
// ];
// const server = http.createServer((req, res) => {
//   const { method, url } = req;

//   if (method === "POST" && url === "/users") {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     req.on("end", () => {
//       const newuser = JSON.parse(body);
//       if (arrusers.some((user) => user.email === newuser.email)) {
//         res.statusCode = 409;
//         return res.end("the user already exist");
//       } else {
//         arrusers.push(newuser);
//         console.log("the user added succesful");
//         res.end(JSON.stringify(arrusers));
//       }
//     });
//   } else if (method === "GET" && url === "/users") {
//     res.write("the users: \n");
//     res.end(JSON.stringify(arrusers));
//   } else if (method === "PATCH" && url.startsWith("/users/")) {
//     let iduser = url.split("/")[2];
//     let eleuser = arrusers.find((user) => user.id == iduser);
//     if (eleuser) {
//       let body = "";
//       req.on("data", (chunk) => {
//         body += chunk;
//       });
//       req.on("end", () => {
//         const newarg = JSON.parse(body);
//         for (let key in newarg) eleuser[key] = newarg[key];
//         res.write("user has updated \n");
//         res.end(JSON.stringify(eleuser));
//       });
//     } else {
//       res.end("user id not find");
//     }
//   } else if (method === "GET" && url.startsWith("/users/")) {
//     let id = url.split("/")[2];
//     let eleid = arrusers.find((user) => user.id == id);
//     if (eleid) {
//       res.write("the user: \n");
//       res.end(JSON.stringify(eleid));
//     } else {
//       res.end("user ID not define");
//     }
//   } else if (method === "DELETE" && url.startsWith("/users/")) {
//     const id = url.split("/")[2];
//     if (arrusers.some((user) => user.id == id)) {
//       arrusers = arrusers.filter((user) => user.id != id);
//       res.write("the user deleted succesful");
//       res.end(JSON.stringify(arrusers));
//     } else {
//       res.end("user id not find!");
//     }
//   }
// });
// server.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });
