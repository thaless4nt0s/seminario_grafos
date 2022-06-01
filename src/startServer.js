import {ApolloServer} from "apollo-server";
import mongoose from "mongoose";

function startServer({typeDefs, resolvers}){
    mongoose.connect("mongodb://localhost:27017/graphql",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=> console.log("conectado com sucesso !!")) 
    // porta do mongo e o nome do banco
    
    const server = new ApolloServer({typeDefs, resolvers});
    server.listen().then(({url}) => console.log(`Server started at ${url}`));

}

export default startServer;