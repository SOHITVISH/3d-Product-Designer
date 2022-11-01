const mongoose = require('mongoose');

const dbName = "3DProductDesigner"
const url =`mongodb+srv://hameed:abdul@cluster0.dplkjdf.mongodb.net/${dbName}?retryWrites=true&w=majority`


mongoose.connect(url)
.then((result) => {
    console.log('successfully connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;