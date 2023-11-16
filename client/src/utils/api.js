// import { Octokit } from '@octokit/core';

// const octokit = new Octokit({
// 	auth: process.env.OCTOTOKEN
// });


// const searchRepositories = async (user) => {

//   // Check if user.projects[0] and user.projects[0].features are available before accessing them
//   const featureList = user.projects[0]?.features || [];

//   const gitResults = await Promise.all(
//     featureList.map(async (feature) => {
//       try {
//         const query = feature.name.replace(/\s/g, '+');
//         const results = await octokit.request('GET /search/repositories?q=' + query + '+in:readme&order=desc&per_page=5', {
//           headers: {
//             'X-GitHub-Api-Version': '2022-11-28',
//           },
//         });

//         if (!results) {
//           throw new Error('GitHub query returned no results.');
//         } else {
//           return results.items.html_url;
//         }
//       } catch (err) {
//         console.log(err);
//         return null;
//       }
//     })
//   );

//   return gitResults;
// };

// export default searchRepositories;