# Finding the differences project

This is the programm for finding the differences between two files.

### Hexlet tests and linter status:

[![Actions Status](https://github.com/KindProgrammer/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/KindProgrammer/frontend-project-46/actions)
![tests workflow](https://github.com/KindProgrammer/frontend-project-46/actions/workflows/make-tests.yml/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/26f0ad1e07b09765e15c/maintainability)](https://codeclimate.com/github/KindProgrammer/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/26f0ad1e07b09765e15c/test_coverage)](https://codeclimate.com/github/KindProgrammer/frontend-project-46/test_coverage)

### Installing

You should have Node.js installed before proceeding. Only test JS against v20.12.2.

```
$ git clone https://github.com/KindProgrammer/frontend-project-46.git
$ cd frontend-project-46/
$ make install
$ npm link
```

### How to use

The program supports various input formats: yaml, json.

And generates reports as plain text, stylish and json.

To compare 2 files enter the command 'gendiff', and 2 paths (relative or absolute) to files like below:

```
$ gendiff file1.json file2.json
```

after that you will get the result of the work of the programm in _stylish_ format. This is the default format. If you want to use another format you need to specify it like below:

```
$ gendiff -f plain file1.json file2.json
```

#### Examples of use:

1. <a href="#default-comparison-flat-json">Comparison of flat files (JSON)</a>
2. <a href="#default-comparison-flat-yaml">Comparison of flat files (YAML)</a>
3. <a href="#stylish-comparison-nested">Comparison of nested files with stylish format</a>
4. <a href="#plain-comparison-nested">Comparison of nested files with plain format</a>
5. <a href="#json-comparison-nested">Comparison of nested files with json format</a>

## Command gendiff: example of work

<p id="default-comparison-flat-json">Json files comparison</p>

[![asciicast](https://asciinema.org/a/BOrDxBxACCcGr7SS6ON5c2gDV.svg)](https://asciinema.org/a/BOrDxBxACCcGr7SS6ON5c2gDV)

<p id="default-comparison-flat-yaml">Yml files comparison</p>

[![asciicast](https://asciinema.org/a/MchWkTTDOW17IvHNfS004Sv3u.svg)](https://asciinema.org/a/MchWkTTDOW17IvHNfS004Sv3u)

<p id="stylish-comparison-nested">There is an example of the work for nested data</p>

[![asciicast](https://asciinema.org/a/nJoKAspUPj62DFrVviipouIQ2.svg)](https://asciinema.org/a/nJoKAspUPj62DFrVviipouIQ2)

<p id="plain-comparison-nested">There is an example of the work with the plain format</p>

[![asciicast](https://asciinema.org/a/vMOLbR5CCmoI642eDPANlnnZs.svg)](https://asciinema.org/a/vMOLbR5CCmoI642eDPANlnnZs)

<p id="json-comparison-nested">There is an example of the work with the json format</p>

[![asciicast](https://asciinema.org/a/1WHYW92WLA76B7Clv62ZmvNuX.svg)](https://asciinema.org/a/1WHYW92WLA76B7Clv62ZmvNuX)
