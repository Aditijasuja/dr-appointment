import mongoose from "mongoose";

const connectDB = async () => {
 try{ const {connection} = await mongoose.connect(process.env.MONGOURI || 'mongodb://localhost:27017/doctorappointment');
  if(connection){
    console.log("MongoDB connection Successfull", process.env.MONGOURI );
  }}
  catch(e){
    console.log("Error Connecting to DB", e);
    process.exit(1);
  }
  // mongoose.connection.on('connected', () => console.log('Database Connected'))
  // await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
}

export default connectDB