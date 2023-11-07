const { Octokit } = require("octokit/core");

const octokit = new Octokit({
	auth: process.env.OCTOTOKEN
  //TODO: add auth token to env
});

//TODO: bring in featureList from project submission to replace this
let terms = "";
const featureList = ["animation", "hover"];

for (let x of featureList) {
	terms += x + "+";
}

query = terms.slice(0,-1);
console.log(query);

const queryString = ('q=' + query + '+in:readme&order=desc&per_page=10');

await octokit.request(`GET /search/repositories?q=Q${queryString}`, {
	headers: {
		'X-GitHub-Api-Version': '2022-11-28'
		}
})

//TODO: Wrap this in a function and export