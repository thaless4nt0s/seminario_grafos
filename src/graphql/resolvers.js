import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import path from "path"

const resolversArray = fileLoader(path.join(__dirname, "modules", "**", "resolvers.js"));
// dentro da pasta modules, acessa qualquer pasta (**) e dentro dessas pastas vai buscar qualquer resolvers.js
const resolvers = mergeResolvers(resolversArray)
// Agrupamento dos resolvers numa string só
export default resolvers;