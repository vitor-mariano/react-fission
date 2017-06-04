import apisauce from 'apisauce';

const create = (baseURL = process.env.API_URL) => {
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
