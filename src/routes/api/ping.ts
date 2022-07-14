import type { RequestHandler } from "@sveltejs/kit";

interface Params extends Record<string, string> {
  [key: string]: string;
}

interface Output {
  pong: boolean;
}

export const get: RequestHandler<Params, Output> = async ({ params }) => {
  return {
    status: 200,
    headers: {},
    body: {
      pong: true,
    },
  }
}