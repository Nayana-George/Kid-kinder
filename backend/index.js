import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import newrouter from './router/newrouter.js'

const app = express();
app.use(cors()); //to connect frontend and backend
app.use(express.json());
app.use(express.static("public"));
app.use('/temp', newrouter)


mongoose
  .connect("mongodb+srv://nayanageorge:nmGCJHoHJyKBjVtw@cluster0.u3zgcth.mongodb.net/Book-database")
  .then(() => {
    console.log("Connected successfully to MongoDB");
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

