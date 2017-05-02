import apisauce from 'apisauce';
// import Config from 'Config';

const create = (baseURL = ENV.apiUrl) => {
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
