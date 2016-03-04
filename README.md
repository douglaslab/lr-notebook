# lr-notebook

`lr-notebook` is a project notebook meant to facilitate organization & collaboration in research.

Our projects start with ideas, sketches, conversations, meetings, experiments, and prototypes. We collect and inscribe information in various forms: documents, images, spreadsheets, models, source code, videos, etc. We accumulate knowledge, and with great effort it be distilled into figures, slides, manuscripts for communication via seminars, lectures, conversations, and online publication.

`lr-notebook` is a [lektor](getlektor.com) project. Lektor is a static website generator. Lektor "builds out an entire project from static files into many individual HTML pages and has a built-in admin UI and minimal desktop app"<sup>[1](https://github.com/lektor/lektor)</sup>.

# Getting started

`lr-notebook` is meant to be adopted with only minimal changes to existing workflows, assuming that work is done in files and directories that are synced to cloud-based storage.

## Installation (Mac)

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [Homebrew](http://brew.sh/), then `brew install imagemagick`
- [Python 2.7](https://www.python.org/ftp/python/2.7.11/python-2.7.11-macosx10.6.pkg)
- [Lektor](https://www.getlektor.com/docs/installation/) (development version)

## Creating a new notebook

Instructions here to create a notebook.

## Running Lektor server

From the Terminal:
```
$ cd [path_to_lektor_repo]
$ . venv/bin/activate
$ lektor --project "path_to_my_lr-notebook" server -p 5000
```

