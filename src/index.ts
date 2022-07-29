import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import connectDB from './mongodb/config/db'
import * as models from './mongodb/models'


connectDB();

export const server = new ApolloServer({
	schema,
	context: {models}
})

const port: Number = 4000;

server.listen({port}).then(({url}) => {
	console.log(`🚀  Server ready at ${url}`);
});


