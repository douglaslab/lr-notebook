# lr-notebook

`lr-notebook` is a project notebook meant to facilitate organization & collaboration in research.

Our projects start with ideas, sketches, conversations, meetings, experiments, and prototypes. We collect and inscribe information in various forms: documents, images, spreadsheets, models, source code, videos, etc. We accumulate knowledge, and with great effort it be distilled into figures, slides, manuscripts for communication via seminars, lectures, conversations, and online publication.

The research process is messy and requires constant effort to keep all that information organized. Basically, `lr-notebook` is a [Lektor](getlektor.com) project designed to let you browse your file system as a website that gets dynamically organized specifically for research projects. If users follow some simple conventions that are roughly equivalent what everyone already does anyway, `lr-notebook` will provide some very powerful convenience features, such as indexing all the work for each project on its own page, or making everything search-able.

# What is Lektor?

Lektor is a static website generator . Lektor "builds out an entire project from static files into many individual HTML pages and has a built-in admin UI and minimal desktop app"<sup>[1](https://github.com/lektor/lektor)</sup>.

# Getting started

`lr-notebook` is meant to be adopted with only minimal changes to existing workflows, assuming that work is done in files and directories that are synced to cloud-based storage.

## Install Dependencies (Mac)

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [Homebrew](http://brew.sh/), then `brew install imagemagick`
- [Python 2.7](https://www.python.org/ftp/python/2.7.11/python-2.7.11-macosx10.6.pkg)
- [Anonymous Pro](https://www.google.com/fonts#UsePlace:use/Collection:Anonymous+Pro) (download zip)
- [Source Sans Pro](https://www.google.com/fonts#UsePlace:use/Collection:Source+Sans+Pro) (download zip)


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
