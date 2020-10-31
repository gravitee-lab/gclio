# Pipeline defintion

The pipeline definition is very simple :
* there is just one Circle CI Pipeline WorkFlow
* this WorkFlow does the npm test, build and publish of the npm package of the Gravitee Dev CLI `gclio`


### Global initialization Process of all secrets

* How I initialized the npm registry secret for the Gravitee Dev CLI `gclio` Circle CI Pipeline :

```bash

export SECRETHUB_ORG="gravitee-lab"
export SECRETHUB_REPO="cicd"
secrethub org init "${SECRETHUB_ORG}"
secrethub repo init "${SECRETHUB_ORG}/${SECRETHUB_REPO}"

# --- #
# for the DEV CI CD WorkFlow of
# the Gravitee CLI gclio
secrethub mkdir --parents "${SECRETHUB_ORG}/${SECRETHUB_REPO}/meta/gclio/npm-registries/npmjs.org"


# --- #
# write quay secrets for the DEV CI CD WorkFlow of
# the Gravitee CLI gclio

npm login

export LOCAL_SECRET_FILE=${HOME}/.npmrc
secrethub write --in-file ${LOCAL_SECRET_FILE} "${SECRETHUB_ORG}/${SECRETHUB_REPO}/meta/gclio/npm-registries/npmjs.org/npmrc"

# --- #
# And in the Circle CI Pipeline, I will :
#
export LOCAL_SECRET_FILE=${HOME}/.npmrc
secrethub read --out-file "${LOCAL_SECRET_FILE}" "${SECRETHUB_ORG}/${SECRETHUB_REPO}/meta/gclio/npm-registries/npmjs.org/npmrc"

```

* I created the Circle CI `cicd-gclio` Context in the `gravitee-lab`organization, and then initialized the secrethub service account for Circle CI / Secrethub integration :

```bash
export SECRETHUB_ORG="gravitee-lab"
export SECRETHUB_REPO="cicd"
secrethub repo init "${SECRETHUB_ORG}/${SECRETHUB_REPO}"
secrethub service init "${SECRETHUB_ORG}/${SECRETHUB_REPO}" --description "Circle CI Pipeline Service for Gravitee Dev CLI [gclio]" --permission read | tee ./.the-created.service.token

secrethub mkdir --parents "${SECRETHUB_ORG}/${SECRETHUB_REPO}/meta/gclio/circleci/secrethub-service-account"
cat ./.the-created.service.token | secrethub write "${SECRETHUB_ORG}/${SECRETHUB_REPO}/meta/gclio/circleci/secrethub-service-account/token"


```
