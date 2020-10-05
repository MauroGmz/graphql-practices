import express from 'express';
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    })
});

app.use('/graphql', graphqlHTTP({

}));

app.listen(3000, () => console.log('Server on port 3000'));