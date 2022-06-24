interface ENV {
  IMGUR_ID: string | undefined;
  IMGUR_SECRET: string | undefined;
}

interface Config {
  IMGUR_ID: string;
  IMGUR_SECRET: string;
}

const getConfig = (): ENV => ({
  IMGUR_ID: process.env.IMGUR_ID,
  IMGUR_SECRET: process.env.IMGUR_SECRET,
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
