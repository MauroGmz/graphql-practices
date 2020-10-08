import { Schema, model } from 'mongoose';

const carSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    color: String
});

export default model('Car', carSchema);