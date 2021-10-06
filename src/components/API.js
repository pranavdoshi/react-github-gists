const URL = "https://api.github.com";

const getGistsFromGithubAPI = (userName) => {
    return `${URL}/users/${userName}/gists`;
}

export default getGistsFromGithubAPI;