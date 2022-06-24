import config from '$lib/util/config';
import { ImgurClient } from 'imgur';

const imgur = new ImgurClient({
  clientId: config.IMGUR_ID,
  clientSecret: config.IMGUR_SECRET,
});

export default imgur;