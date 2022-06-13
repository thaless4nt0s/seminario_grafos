import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path"

const typesArray = fileLoader(path.join(__dirname, "modules", "**", "*.gql"))
// dentro da pasta modules, acessa qualquer pasta (**) e dentro dessas pastas vai buscar qualquer *.gql
const typeDefs = mergeTypes(typesArray)
// Agrupamento das mutations e querys numa string só
console.log(typeDefs)

export default typeDefs;