type GraphQLRequestInit = Omit<RequestInit, "body" | "method">;

interface GraphQLRequestData<T = any> {
  query: string;
  variables?: T;
}

export const GraphQLRequest = (graphqlEndpoint: string) => {
  return {
    async Query<TRes = any, TReq = any>(
      data: GraphQLRequestData<TReq>,
      options?: GraphQLRequestInit
    ): Promise<TRes> {
      const response = await fetch(graphqlEndpoint, {
        body: JSON.stringify(data),
        ...options,
      });

      const serverResponse = await response.json();
      return serverResponse.data as TRes;
    },

    async Mutation<TRes = any, TReq = any>(
      data: GraphQLRequestData<TReq>,
      options?: GraphQLRequestInit
    ): Promise<TRes> {
      const response = await fetch(graphqlEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        ...options,
      });

      const serverResponse = await response.json();
      return serverResponse.data as TRes;
    },
  };
};