import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  id: String,
});

const taskSchema = new mongoose.Schema({
  userId: String,
  task: String,
});

export const User = mongoose.model("User", userSchema);
export const Sunday = mongoose.model("Sunday", taskSchema);
export const Monday = mongoose.model("Monday", taskSchema);
export const Tuesday = mongoose.model("Tuesday", taskSchema);
export const Wednesday = mongoose.model("Wednesday", taskSchema);
export const Thursday = mongoose.model("Thursday", taskSchema);
export const Friday = mongoose.model("Friday", taskSchema);
export const Saturday = mongoose.model("Saturday", taskSchema);
export const Important = mongoose.model("Important", taskSchema);
