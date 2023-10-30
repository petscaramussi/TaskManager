// this  file will handle connection logic to MongoDB databse

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://petersonscaramussidasilva:P0Ey6Xyt0DyMZg2q@cluster0.nt0tk1x.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connected to MongoDB successfully :)")
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
});



module.exports = {
    mongoose
}