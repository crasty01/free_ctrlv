import type { RequestEvent, RequestHandler } from "@sveltejs/kit";
import imgurClient from '$lib/services/imgur';

interface OutputBody {
  [key: string]: any;
};

export const post: RequestHandler<Record<string, string>, OutputBody> = async ({ request }: RequestEvent) => {
  const formdata = await request.formData();
  const files = formdata.getAll('files[]') as Array<File>;
  const buffers = await (await Promise.all(files.map(e => e.arrayBuffer()))).map(arrayBuffer => Buffer.from(arrayBuffer))

  // console.log(await imgurClient.getAlbum('NMe98sL'));
  const album = await (await imgurClient.createAlbum()).data;

  const images_res = [];
  for (let i = 0; i < buffers.length; i++) {
    console.log(imgurClient.credentials)
    const res = await imgurClient.upload({
      image: buffers[i],
      album: album.id,
    });
    images_res.push(res);
  }

  console.log(images_res);

	return {
		body: {},
	}
}