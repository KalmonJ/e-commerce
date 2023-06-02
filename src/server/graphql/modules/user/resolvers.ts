export const userResolver = {
  Query: {
    users: () => {
      return [
        {
          name: "hello",
          username: "anyUsername",
          email: "email",
          phoneNumber: "dfsdfdf",
        },
      ];
    },
  },

  Mutation: {
    createUser: () => {},
  },
};
