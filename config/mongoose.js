

const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/api-polling');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error is connecting'));
db.once('open',function(){
    console.log('successfully connected')
})