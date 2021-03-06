import express from 'express';
const app = express();

import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/graphql-test')
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));
    
// mongoDB models
import Car from './models/Car';

import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';

// settings 
app.set('port', process.env.PORT || 3000);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// routes
app.use('/graphql', express.json(), graphqlExpress({
    schema,
    context: {
        Car
    }
}));

app.use('/graphiql', graphiqlExpress({
    endpointUrl: '/graphql'
}));


// start the server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});