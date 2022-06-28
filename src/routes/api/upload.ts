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

export const post: RequestHandler<InputBody, OutputBody> = async ({ request }: RequestEvent<Params>) => {
  const formdata = await request.formData();
  const files = formdata.getAll('files[]') as Array<File>;
  console.log(await Promise.all(files.map(e => e.arrayBuffer())));
	return {
		body: {},
	}
}