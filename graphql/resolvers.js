import { jobs } from "./test";

const resolvers = {
  Query: {
    jobs: () => jobs,
  },
};

export default resolvers;
