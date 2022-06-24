import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

interface Params {
  [key: string]: any;
};
interface OutputBody {
  [key: string]: any;
};
interface InputBody {
  [key: string]: any;
};

export const post: RequestHandler<InputBody, OutputBody> = async (event: RequestEvent<Params>) => {
	return {
		body: {},
	}
}