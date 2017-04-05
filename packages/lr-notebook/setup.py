from setuptools import setup

setup(
    name='lektor-lr-notebook',
    version='0.1',
    author=u'Shawn M. Douglas',
    author_email='shawn.douglas@ucsf.edu',
    license='MIT',
    py_modules=['lektor_lr_notebook'],
    entry_points={
        'lektor.plugins': [
            'lr-notebook = lektor_lr_notebook:LrNotebookPlugin',
        ]
    }
)
