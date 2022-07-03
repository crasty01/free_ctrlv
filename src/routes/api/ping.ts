import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

interface Params {
  [key: string]: any;
};
interface OutputBody {
  [key: string]: any;
  data: 'pong';
};
interface InputBody {
  [key: string]: any;
};

export const post: RequestHandler<InputBody, OutputBody> = async (_event: RequestEvent<Params>) => {
	return {
		body: {
      data: "pong",
    },
	}
}

export const get: RequestHandler<InputBody, OutputBody> = async (_event: RequestEvent<Params>) => {
	return {
		body: {
      data: "pong",
    },
	}
}