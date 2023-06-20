// import mongoose from "mongoose";
// const Schema = mongoose.Schema

// const dronSchema = new Schema(
//     {
//         id: { type: Number },
//         name: { type: String },
//         type: { type: String },
//         price: { type: Number },
//         // image:{type:String},
//         description:{type:String},
//         quantity:{type:Number}
//     },
//     { collection: 'drons' }
// )

// export default mongoose.model('DronModel', dronSchema)



import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dronSchema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    type: { type: String },
    price: { type: Number },
    // image: { type: String },
    description: { type: String },
    quantity: { type: Number },
  },
  { collection: 'drons' }
);

const DronModel = mongoose.model('DronModel', dronSchema);

export default DronModel;
