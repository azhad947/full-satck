import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("server is running :", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB}/ ${DB_NAME}`)
//     } catch (error) {
//         console.error("error : ", error)
//         throw err

//     }
// })()
