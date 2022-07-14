import type { RequestHandler } from "@sveltejs/kit";

interface Params extends Record<string, string> {
  ping: string;
}

interface Output {
  pong: boolean;
  recieved: string;
}

export const get: RequestHandler<Params, Output> = async ({ params }) => {
  return {
    status: 200,
    headers: {},
    body: {
      recieved: params.ping,
      pong: true,
    },
  }
}