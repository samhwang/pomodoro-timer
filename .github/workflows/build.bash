#!/usr/bin/env sh

set -e

npm run build

cd dist

test -f ".nojekyll" || touch .nojekyll

git init
git add remote origin ${REMOTE_REPO}
git fetch origin ${DEPLOY_BRANCH}
git checkout ${DEPLOY_BRANCH}
git add -fA
git commit --alow-empty -m 'Updates'
git push ${REMOTE_REPO} ${DEPLOY_BRANCH}

echo "Successfully built and deployed."
