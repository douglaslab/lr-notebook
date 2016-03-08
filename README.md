# lr-notebook

[![Join the chat at https://gitter.im/douglaslab/lr-notebook](https://badges.gitter.im/douglaslab/lr-notebook.svg)](https://gitter.im/douglaslab/lr-notebook?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

`lr-notebook` is a project notebook meant to facilitate organization & collaboration in research. It is meant to be adopted with only minimal changes to existing workflows, assuming that work is done in files and directories that are synced to cloud-based storage.

![What lr-notebook does](/assets/static/images/overview.png)

# Live Demo

A static build of a live notebook can be found at [sdouglas.github.io/lr-notebook](https://sdouglas.github.io/lr-notebook). If you wish to try out the file system features, you'll want to download or fork the [repo](https://github.com/sdouglas/lr-notebook) and view it running on the Lektor server.

# Installation

lr-notebook makes use of [Lektor 2.0](https://github.com/lektor/lektor/blob/master/CHANGES) features. For now, that means installing and running the development version via the terminal.

## Install Dependencies (Mac)

- [Python 2.7](https://www.python.org/ftp/python/2.7.11/python-2.7.11-macosx10.6.pkg)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [Homebrew](http://brew.sh/), then `brew install imagemagick`

## Watch asciicast

<a href="https://asciinema.org/a/87qvi5qxucynt5tqxqdid587n" target="_blank"><img src="https://asciinema.org/a/87qvi5qxucynt5tqxqdid587n.png" /></a>

## Install Lektor (development version)
- [Lektor](https://www.getlektor.com/docs/installation/) (development version)

```
git clone https://github.com/lektor/lektor
cd lektor
make build-js
virtualenv -p /usr/bin/python2.7 venv
. venv/bin/activate
pip install --upgrade pip
pip install --editable .
```

## Install lr-notebook

1. Fork [lr-notebook](https://github.com/douglaslab/)
2. `git clone https://github.com/YOUR-USERNAME/lr-notebook`

## Running Lektor server

From the Terminal:
```
cd "PATH_TO_LEKTOR_REPO"
. venv/bin/activate
lektor --project "PATH_TO_LR-NOTEBOOK" server -p 5000
```

Browse to [localhost:5000](http://localhost:5000)
