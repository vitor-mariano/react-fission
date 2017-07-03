export default {
  /* eslint-disable global-require, import/no-dynamic-require */
  profileRequest: username => ({
    ok: true,
    data: require(`../fixtures/profile_request/${username}.json`),
  }),
  /* eslint-enable */
};
