import startServer from "./startServer";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

startServer({typeDefs, resolvers})
//          {User/Post/Query/Mutation , Funções do mongoDB} 
//          
/*
    JSON
    [
        {name: "adriano", email:"adriano@ifce.com", social: {instagram: "adrianoblue"} },
        {name: "Thales", email:"thales@ifce.com", social: {instagram: null} },
        {name: "Lucas", email:"lucas@ifce.com", social: {instagram: "luca$"} },
        {name: "carlos", email:"carlos@ifce.com", social: {instagram: "wilker"} }
    ]

    JSON
    [
        {name: "adriano" },
        {name: "Thales"},
        {name: "Lucas" },
        {name: "carlos" }
    ]
    ele pode retornar somente essas informações 
    * AWS -> PAY PER USE
    * Tráfego: Quantidade de dados (bytes) que trafegam na nossa rede   
    * evitar o overfetching (mais dados que o cliente precisa)

    Toda request é POST
    Query -> Obter informações (GET)
    Mutation -> Manipular dados (POST/PATCH/PUT/DELETE)
    Scalar Types => String, Int, Boolean, Float e ID

*/