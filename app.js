
//import
const express = require("express");
let books = require("./books");
const morgan = require("morgan");
const connectDB = require("./database");
const cors =require("cors");
let booksRoute = require("./api/books/books.routes");
//
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/books", booksRoute);



//not found handler
app.use((req,res,next)=>{
    return res.status(404).json({message: "Path not found!"});
});
//error handler
app.use((error,req,res,next)=>{
    return res.status(error.status || 500).json(error.message || "server error!!")
})





connectDB();
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`this is port ${PORT}`);
});
