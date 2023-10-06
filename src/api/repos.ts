import express from 'express';
import GitRepo from "../interfaces/GitRepo"

const router = express.Router();

function getGitRepos(url:string): Promise<any[]> {

    // We can use the `Headers` constructor to create headers
    // and assign it as the type of the `headers` variable
    const headers: Headers = new Headers()
    // Add a few headers
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')
  
    // Create the request object, which will be a RequestInfo type. 
    // Here, we will pass in the URL as well as the options object as parameters.
    const request: RequestInfo = new Request(url, {
      method: 'GET',
      headers: headers
    })
  
    // For our example, the data is stored on a static `users.json` file
    return fetch(request)
      // the JSON body is taken from the response
      .then(res => res.json())
      .then(res => {
        // The response has an `any` type, so we need to cast
        // it to the `User` type, and return it from the promise
        return res
      })
  }
  

router.get<{}, GitRepo[]>('/', (req, res) => {
    let apiUri = 'https://api.github.com/orgs/dotnet/repos'
    if (req.query.url) {
      apiUri += req.query.url
    }
    getGitRepos(apiUri)
    .then(repos => {
        var output: GitRepo[];
        output = [];
        repos.forEach(r => {
            let repo: GitRepo = {
                id: r.id,
                name: r.name,
                description: r.description,
            }
            output.push(repo)
        });

        res.send(output);

    })
});

export default router;
  