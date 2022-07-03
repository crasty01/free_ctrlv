interface ENV {
  IMGUR_ID: string | undefined;
  IMGUR_SECRET: string | undefined;
  IMGUR_ACCESS_TOKEN: string | undefined;
  IMGUR_REFRESH_TOKEN: string | undefined;
}

interface Config {
  IMGUR_ID: string;
  IMGUR_SECRET: string;
  IMGUR_ACCESS_TOKEN: string;
  IMGUR_REFRESH_TOKEN: string;
}

const getConfig = (): ENV => ({
  IMGUR_ID: process.env.IMGUR_ID,
  IMGUR_SECRET: process.env.IMGUR_SECRET,
  IMGUR_ACCESS_TOKEN: process.env.IMGUR_ACCESS_TOKEN,
  IMGUR_REFRESH_TOKEN: process.env.IMGUR_REFRESH_TOKEN,
});

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();
const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
