Set up -docs and -docs-qa websites to host Storybook.

## General Acceptance criteria

- [ ] A personal access token with scope `repo` has been added
      under `Secrets`->`Actions` with key `DOCS_TOKEN`.  

## Acceptance Criteria for `team02-yourTeam-docs-qa` 

- [ ] A public repo with the name `team02-yourTeam-docs-qa` exists.
- [ ] There is a `README.md` file and a `docs/.keep` file on the `main` 
      branch of the `team02-yourTeam-docs-qa` repo.
- [ ] GitHub pages is enabled on the `team02-yourTeam-docs-qa` repo.
- [ ] The README.md has a correct link to the documentation for the QA site (done via a pull request; see "Details-1" below)

## Acceptance Criteria for `team02-yourTeam-docs` 

- [ ] A public repo with the name `team02-yourTeam-docs` exists.
- [ ] There is a `README.md` file and a `docs/.keep` file on the `main` 
      branch of the `team02-yourTeam-docs` repo.
- [ ] GitHub pages is enabled on the `team02-yourTeam-docs` repo.
- [ ] The README.md has a correct link to the documentation for the QA site (this should happen when you merge the PR from Details-1; see "Details-2" below)


## Details-1: Pull request to trigger initial docs setup

1. Make a new branch `xy-setup-docs` where `xy` are your intials.
   If working as a pair, use `wx-yz-setup-docs`.

   ```text
   git checkout main
   git pull origin main
   git checkout -b xy-setup-docs
   ```

2. Working on this branch, edit the `README.md` to make the links near the top to the GitHub pages sites for documentation point to the correct spot (e.g. edit this:

   ```md
   Storybook is here:
   * Production: <https://ucsb-cs156-w22.github.io/starter-team02-docs/>
   * QA:  <https://ucsb-cs156-w22.github.io/starter-team02-docs-qa/>
   ```

   to say this (substituting your team in for `w22-7pm-3`)

   ```md
   Storybook is here:
   * Production: <https://ucsb-cs156-w22.github.io/team02-w22-7pm-3-docs/>
   * QA:  <https://ucsb-cs156-w22.github.io/team02-w22-7pm-3docs-qa/>
   ```

3. Do a pull request to the main branch.  This should trigger the GitHub
   Action workflow that publishes the documentation to the QA site.

   If this step fails, the usual cause is some problem related to  the personal access token called `DOCS_TOKEN`; either it has:
   * the wrong scope (it should be `repo`)
   * the wrong name (it should be `DOCS_TOKEN`)
   * or was uploaded to the wrong place.

   If it doesn't work, try fixing the token and then re-running the job.

4. Check the link for the QA site and ensure that the 
   documentation shows up.


## Details-2: Pull request to trigger initial docs setup

Once the qa-site is working properly, you should merge the pull request
for `xy-setup-docs` branch that you created.

This should trigger another GitHub actions run that will set up the 
repo for the production documentation.


