import { useQuery } from '@apollo/client';
import { GET_USER } from './queries';
const { Octokit } = require("octokit/core");

const octokit = new Octokit({
	auth: process.env.OCTOTOKEN
});


const searchRepositories = async () => {
  const { data } = useQuery(GET_USER);
  
  // Check if data is available before accessing its properties
  if (!data) {
    throw new Error('No user data available.');
  }

  const { user } = data;

  // Check if user.projects[0] and user.projects[0].features are available before accessing them
  const featureList = user.projects[0]?.features || [];

  const gitResults = await Promise.all(
    featureList.map(async (feature) => {
      try {
        const query = feature.name.replace(/\s/g, '+');
        const results = await octokit.request('GET /search/repositories?q=' + query, {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });

        if (!results) {
          throw new Error('GitHub query returned no results.');
        } else {
          return results.items.html_url;
        }
      } catch (err) {
        console.log(err);
        return null;
      }
    })
  );

  return gitResults;
};

export default searchRepositories;