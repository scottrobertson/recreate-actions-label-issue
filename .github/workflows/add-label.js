const github = require("@actions/github");

async function run() {
  const octokit = github.getOctokit(process.env.GITHUB_TOKEN);

  await octokit.rest.issues.addLabels({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    issue_number: github.context.payload.pull_request.number,
    labels: [`testing-${Math.random()}`],
  });
}

run();
