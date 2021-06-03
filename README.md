# Personal Website/Portfolio

## Notes to future self
I have two branches: `main` and `gh-pages`.

Under repo settings>pages, I changed the Source to build the site from the gh-pages branch.

In my package.json file, I have added the line:
`"deploy": "gh-pages -b gh-pages -d build"`
which will build the project on the `gh-pages` branch when I run the command
`npm run deploy`

This allows me to clone my repo, work on the `main` branch, and when I'm finished making changes, just run the command:
`npm run deploy`
and this will re-build the project and deploy on the `gh-pages` branch.

Before making changes in the future, remember to look at the documentation of npm-check-updates to update the package.json file.
