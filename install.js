const fs = require("fs");
const extract = require("extract-zip");

let internalApi = {};

internalApi.unZip = async () => {
  try {
    await extract(`${__dirname}/bin.zip`, { dir: __dirname });
    console.log("Extraction complete");
  } catch (err) {
    internalApi.exitOnError(err);
  }
};

internalApi.exitOnError = (err) => {
  console.error(err);
  process.exit(1);
};

internalApi.init = async () => {
  if (fs.existsSync("./bin/audiowaveform")) {
    console.log("Audiowaveform already installed");
  } else {
    await internalApi.unZip();
  }
};

internalApi.init();
