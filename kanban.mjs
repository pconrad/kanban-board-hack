// console.log("process.argv=",process.argv)

import glob from 'glob'
import fs from 'fs/promises';

if (process.argv.length < 4) {
  console.log("Usage: node kanban.mjs path kanban-board")
  process.exit(1);
}

const srcDir = process.argv[2]
const kanbanBoard = process.argv[3]

const main = async () => {
  console.log(createPrefix(kanbanBoard));
  glob(`${srcDir}/*.md`, async (err, files) => {
    if (err) {
      console.log(err)
    } else {
      var step = 1;
      var filesReversed = [];
      for (const filename of files) {
        const text = await createIssueStep(step, filename, kanbanBoard);
        console.log(text);
        filesReversed.unshift(filename);
        step++;
      }
      for (const filename of filesReversed) {
        const text = await addIssueToKanbanBoardStep(step, filename, kanbanBoard);
        console.log(text);
        step++;
      }
    }
  })
}


async function getFirstLine(filePath) {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return (fileContent.match(/(^.*)/) || [])[1] || '';
}

const createPrefix = (kanbanBoard) => {
  return `
name: Create Issue From File Example Command
on:
  workflow_dispatch:
jobs:
  createIssues:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Create Project ${kanbanBoard}
      run: |
        project_number=$(gh api -X POST /repos/\${{ github.repository }}/projects  -H "Accept: application/vnd.github.v3+json"  -f name="${kanbanBoard}" --jq '.id')
        echo 'PROJECT_NUMBER='$project_number >> $GITHUB_ENV
      env:
        GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
    - name: Create Columns on ${kanbanBoard}
      run: |
        gh api -X POST /projects/\${PROJECT_NUMBER}/columns  -H "Accept: application/vnd.github.v3+json"  -f name="Todo" 
        gh api -X POST /projects/\${PROJECT_NUMBER}/columns  -H "Accept: application/vnd.github.v3+json"  -f name="In Progress" 
        gh api -X POST /projects/\${PROJECT_NUMBER}/columns  -H "Accept: application/vnd.github.v3+json"  -f name="In Review" 
        gh api -X POST /projects/\${PROJECT_NUMBER}/columns  -H "Accept: application/vnd.github.v3+json"  -f name="Done" 
      env:
        GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`;
}



const createIssueStep = async (step, filename, project) => {
  const firstLine = await getFirstLine(filename);
  return `
    - name: Create Issue ${step} From File
      id: step${step}
      uses: peter-evans/create-issue-from-file@v3
      with:
        title: ${firstLine}
        content-filepath: ${filename}`;
}

const addIssueToKanbanBoardStep = async (step, filename, project) => {
  const firstLine = await getFirstLine(filename);
  return `
    - name: Add Issue ${step} to Kanban board ${project}
      uses: peter-evans/create-or-update-project-card@v1
      with:
        project-name: ${project}
        column-name: Todo
        issue-number: \${{ steps.step${step}.outputs.issue-number }}`;
}


await main();