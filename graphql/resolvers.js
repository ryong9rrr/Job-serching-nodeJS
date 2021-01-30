import { getJobs } from "./kakao_all";

const resolvers = {
  Query: {
    jobs: () => getJobs(),
  },
};

export default resolvers;
