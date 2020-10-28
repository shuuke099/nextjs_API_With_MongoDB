import mongoose from 'mongoose';
console.log(process.env.MONGODB_URI);
const connectDb = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) return handler(req, res);
  // Using new database connection
  await mongoose.connect(process.env.LOCAL_DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  return handler(req, res);
}

export default connectDb;















// import mongoose from 'mongoose';

// export default async () => {
//   if (mongoose.connections[0].readyState) return;
//   // Using new database connection
//   await mongoose.connect(process.env.LOCAL_DATABASE, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   });
// };
