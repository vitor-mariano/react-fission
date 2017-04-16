import apisauce from 'apisauce'

const create = (baseURL = 'https://api.github.com') => {
  const http = apisauce.create({
    baseURL,
    // header: {},
    timeout: 10000
  })

  return {
    githubGetRepos: (username) => http.get(`/users/${username}/repos`)
  }
}

export default {
  create
}
