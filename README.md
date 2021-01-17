# audiowaveform-static-aws

**[Audiowaveform](https://github.com/bbc/audiowaveform) static binary for Amazon Linux 2 AMI.**

[The audiowaveform version currently used is `1.4.2`.](https://github.com/bbc/audiowaveform/tree/1.4.2)

## Installation

This module is installed via npm:

```bash
$ npm install @craft-cloud/audiowaveform-static-aws
```

## Example Usage

Returns the path of a statically linked audiowaveform binary on the local filesystem.

```js
const awf = require("@craft-cloud/audiowaveform-static-aws");
const { exec } = require("child_process");

exec(`${awf()} --help`, (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});
```

## Source of binary

Binary built using [flixier audiowaveform aws lambda](https://github.com/flixier/audiowaveform-aws-lambda)
