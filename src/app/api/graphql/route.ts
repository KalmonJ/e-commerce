import { assertServer } from "@/lib/assert";
import { initializeServer } from "@/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";

const backendServer = initializeServer();
const server = backendServer.start();

assertServer(server);

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export async function POST(request: NextRequest) {
  return handler(request);
}

export async function GET(request: NextRequest) {
  return handler(request);
}
