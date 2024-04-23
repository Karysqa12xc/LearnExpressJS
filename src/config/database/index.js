const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Education_Dev');
        console.log("Connect successfully!!!");
    } catch (error) {
        console.log(`Failed Connect!!! ERROR ${error}`);
    }
}
module.exports = { connect };