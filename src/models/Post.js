import mongoose from "mongoose";

const Schema = mongoose.Schema({

    title:{
        type: String,
        required: true
    },

    content:{
        type: String,
        required: true
    },

    author:{
        type: mongoose.Schema.Types.ObjectId, //Relacionamento entre tabelas
        ref: "User", // Mesmo nome para o model que ta no export default do User.js
        required: true
    }
});

export default mongoose.model("Post", Schema);