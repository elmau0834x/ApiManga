import {Schema, model} from 'mongoose';

const mangaSchema = new Schema({
    barcode:{
        type: String,
        unique: true,
        required: true
    },
    name:String,
    vol:Number,
    author:String,
    editorial:String,
    description:String,
    price:Number,
    cost:Number,
    stock:Number,
    status:Number
},{
    timestamps:true,
    versionKey:false
})

export default model('Manga', mangaSchema);