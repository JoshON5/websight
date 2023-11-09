const { Octokit } = require("octokit/core");

const octokit = new Octokit({
	auth: process.env.OCTOTOKEN
});


const searchRepositories = (featureList) => {
  let query = "";
	console.log(featureList);

  for (let x of featureList) {
    query += x + "+";
  }
	console.log(query);

  let queryString = 'q=' + query + 'in:readme&order=desc&per_page=12';
	console.log(queryString);

  return octokit.request('GET /search/repositories?q=' + queryString, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
}

export default searchRepositories;