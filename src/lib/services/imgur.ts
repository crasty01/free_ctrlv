import config from '$lib/util/config';
import { ImgurClient } from 'imgur';

const imgurClient = new ImgurClient({
  clientId: config.IMGUR_ID,
  clientSecret: config.IMGUR_SECRET,
  accessToken: config.IMGUR_ACCESS_TOKEN,
  refreshToken: config.IMGUR_REFRESH_TOKEN,
});

export default imgurClient;