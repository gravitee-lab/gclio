# `gclio` The Gravitee Dev Team CLI

This markdown file is a utility I use to quickly resume work on my last task, on this repo.

Change this for your own needs when you fork this repo.

# Initialization

```bash
export LOCAL_WORKSPACE=~/gclio
git clone git@github.com:gravitee-lab/gclio ${LOCAL_WORKSPACE}
cd ${LOCAL_WORKSPACE}

git config --global commit.gpgsign true
git config --global user.name "Jean-Baptiste-Lasselle"
git config --global user.email jean.baptiste.lasselle.pegasus@gmail.com
git config --global user.signingkey 7B19A8E1574C2883

git config --global --list

# will re-define the default identity in use
# https://docstore.mik.ua/orelly/networking_2ndEd/ssh/ch06_04.htm
ssh-add ~/.ssh.perso.backed/id_rsa

export GIT_SSH_COMMAND='ssh -i ~/.ssh.perso.backed/id_rsa'
ssh -Ti ~/.ssh.perso.backed/id_rsa git@github.com


git flow init --defaults

git push -u origin --all



```

# To resume work

* copy/paster :

```bash

git config --global commit.gpgsign true
git config --global user.name "Jean-Baptiste-Lasselle"
git config --global user.email jean.baptiste.lasselle.pegasus@gmail.com
git config --global user.signingkey 7B19A8E1574C2883

git config --global --list

# will re-define the default identity in use
# https://docstore.mik.ua/orelly/networking_2ndEd/ssh/ch06_04.htm
ssh-add ~/.ssh.perso.backed/id_rsa

export GIT_SSH_COMMAND='ssh -i ~/.ssh.perso.backed/id_rsa'
ssh -Ti ~/.ssh.perso.backed/id_rsa git@github.com


export LOCAL_WORKSPACE=~/gclio
cd ${LOCAL_WORKSPACE}
export FEATURE_ALIAS="src_code_init"
export COMMIT_MESSAGE="feat.(${FEATURE_ALIAS}): adding basic source code structure for a typescript CLI #1"

export FEATURE_ALIAS="circleci_pipeline"
export COMMIT_MESSAGE="feat.(${FEATURE_ALIAS}): adding circle ci pipeline with npm publish #2"
export COMMIT_MESSAGE="feat.(${FEATURE_ALIAS}): completed documentation of circle ci pipeline #2"
export COMMIT_MESSAGE="feat.(${FEATURE_ALIAS}): completed documentation of circle ci pipeline #2"
export FEATURE_ALIAS="first-features"
export COMMIT_MESSAGE="feat.(${FEATURE_ALIAS}): implementing first features implementation as of #1"

# git flow feature start ${FEATURE_ALIAS}
# git add --all && git commit -m "${COMMIT_MESSAGE}" && git push -u origin HEAD

# git push -u origin --all && git push -u origin --tags

atom .

```
