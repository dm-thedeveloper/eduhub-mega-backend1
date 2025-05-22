import mongoose from "mongoose";
import dbName from "../constants.js";

const DBConnection = async () => {
  try {
    console.log("Connecting............");

    const db = await mongoose.connect(`${process.env.DB_URI}/${dbName}`);
    console.log("Data Base Connection Success Fully !!", db.connection.name);
  } catch (error) {
    console.error("Data Base connecing Failed :)");
  }
};
export default DBConnection;