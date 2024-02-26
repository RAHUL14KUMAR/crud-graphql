require("dotenv").config();
const {ApolloServer}=require('@apollo/server')
const express=require('express');
const { startStandaloneServer } =require('@apollo/server/standalone');

const app = express();
app.use(express.json());

const connect=require('./db/connect')

const port=process.env.PORT;

const typeDefs=require('./schema')
const resolvers=require('./resolvers');

const server=new ApolloServer({
    typeDefs,
    resolvers
})

async function startServer(){
    const { url } = await startStandaloneServer(server,{
        listen: { port: port },
    });
    console.log(`🚀  Server ready at: ${url}`);
}


connect();
startServer();

