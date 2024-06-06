const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://garimaver399:mongodb12@garima.kb9yx0d.mongodb.net/?retryWrites=true&w=majority&appName=garima";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectToMongo;
