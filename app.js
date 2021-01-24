import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
//import kakao from "./kakao";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("server is running"));
