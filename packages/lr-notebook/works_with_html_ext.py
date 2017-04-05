# -*- coding: utf-8 -*-
import random
import posixpath
from lektor.build_programs import BuildProgram
# from lektor.context import get_ctx
from lektor.db import Record
from lektor.pluginsystem import Plugin
from lektor.sourceobj import VirtualSourceObject
from lektor.utils import build_url

# fontawesome.io/icons/
FA_ICONS = [
    'cubes',
    'flask',
    'gamepad',
    'gears',
    'hand-lizard-o',
    'sliders'
]


def get_random_fa_icon_class():
    """A simple example to get started, adapted from
    https://www.getlektor.com/docs/plugins/dev/#hooking-events"""
    return 'fa-' + random.choice(FA_ICONS)


class Slides(VirtualSourceObject):
    @property
    def path(self):
        return self.record.path + '@slides'

    @property
    def url_path(self):
        # return build_url([self.record.url_path, 'slides'])
        return build_url([self.record.url_path])


class SlidesBuildProgram(BuildProgram):
    def produce_artifacts(self):
        artifact_name = posixpath.join(self.source.url_path, 'slides.html')
        artifact_sources = list(self.source.iter_source_filenames())
        self.declare_artifact(artifact_name, sources=artifact_sources)

    def build_artifact(self, artifact):
        artifact.render_template_into('slides.html', this=self.source)


class LrNotebookPlugin(Plugin):
    name = u'lr-notebook'
    description = u'Custom plugin functions for lr-notebook.'

    def on_setup_env(self, **extra):
        self.env.jinja_env.globals.update(
            get_random_fa_icon_class=get_random_fa_icon_class
        )

        self.env.add_build_program(Slides, SlidesBuildProgram)

        @self.env.urlresolver
        def resolve_slides_url(node, url_path):
            if url_path == ['slides'] \
               and isinstance(node, Record) \
               and node["_model"] == "entry":
                vobj = Slides(node)
                print("urlresolver:", vobj.record, vobj.source_filename)
                return vobj

        @self.env.virtualpathresolver('slides')
        def resolve_virtual_path(record):
            print("resolve_virtual_path", record)
            return Slides(record)

        @self.env.generator
        def generate_source_file(node):
            if isinstance(node, Record) and node["_model"] == "entry":
                yield Slides(node)
