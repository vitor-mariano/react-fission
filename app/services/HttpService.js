import apisauce from 'apisauce';
import config from '../config/';

const create = (baseURL = config.api.url) => {
  const http = apisauce.create({
    baseURL,
    // header: {},
    timeout: 10000,
  });

  return {
    profileRequest: username => http.get(`/users/${username}`),
    userRepositoriesRequest: username => http.get(`/users/${username}/repos`),
  };
};

export default {
  create,
};
