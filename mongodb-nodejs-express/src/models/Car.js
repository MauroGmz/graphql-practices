import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const carSchema = new Schema({
    name: String
});

const Car = mongoose.model('cars', carSchema);
export default Car;