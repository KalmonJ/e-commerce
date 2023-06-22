import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/server/graphql/modules/**/*.graphql",

  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "@/lib/context#ServerContext",
      },
    },
  },
};

export default config;
