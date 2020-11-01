# `gclio` The Gravitee Dev Team CLI


* Install :

```bash
# --- #
sudo npm install -g gclio
gclio --version
gclio --help

```
* uninstall :

```bash
# --- #
sudo npm uninstall -g gclio
gclio --version

```

* run with log level :

```bash
# possible log levels are the exact same than npm log levels
export LOG_LEVEL=debug
gclio

```



## Build from source

* git clone this repository, and run :

```bash
# --- #
npm i
npm run build
sudo npm i -g ./
gclio --version
gclio --help

```
* clean up :

```bash
# --- #
sudo npm uninstall -g ./
sudo npm unlink
rm -fr ./bin
gclio --version

```
