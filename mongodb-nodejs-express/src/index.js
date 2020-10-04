import express from 'express';
const app = express();

import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/graphql-test')
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));    

// settings 
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});