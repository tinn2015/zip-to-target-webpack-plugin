const config = {};

if (process.env.VUE_APP_ENV === 'dev') {
  Object.assign(config, {
    BACE_API: 'https://www.easy-mock.com/mock/5b03d36f0cdf2b035503b3d4',
  });
} else if (process.env.VUE_APP_ENV === 'fat') {
  Object.assign(config, {
    BACE_API: 'https://fat.rapi.ttbike.com.cn/user/notify',
  });
} else if (process.env.VUE_APP_ENV === 'uat') {
  Object.assign(config, {
    BACE_API: 'https://uat.rapi.ttbike.com.cn/user/notify',
  });
} else if (process.env.VUE_APP_ENV === 'pro') {
  Object.assign(config, {
    BACE_API: 'https://rapi.ttbike.com.cn/user/notify',
  });
}

export default config;
