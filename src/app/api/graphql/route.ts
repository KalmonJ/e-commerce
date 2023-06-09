import { initializeServer } from "@/server";

const backendServer = initializeServer();
const handler = backendServer.start();

export { handler as GET, handler as POST };
