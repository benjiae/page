#! /bin/bash
# i stole this from https://codeberg.org/Codeberg/pages-server/issues/59
build_directory="dist"
build_branch="pages"

# delete previous site built, if it exists
if [ -d "$build_directory" ]; then
  echo "Found previous site build, deleting it"
  rm -rf $build_directory
fi

# get remote origin url, e.g. https://codeberg.org/user/repo.git
remote_origin_url=$(git config --get remote.origin.url)

# generate static site
npm run build

# initialize a git repo in build_directory and checkout to build_branch
cd $build_directory
git init
git checkout -b $build_branch

# ignore macOS system files
echo ".DS_Store" > .gitignore
# stage all files except .gitignore (don't want it in the static site)
git add -- . ':!.gitignore'

# commit static site files and force push to build_branch of the origin
git commit -m "build: update static site"
git remote add origin $remote_origin_url
git push --force origin $build_branch
git remote add github git@github.com:benjiae/page.git
git push --force github $build_branch
