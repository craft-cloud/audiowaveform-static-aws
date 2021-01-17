const fs = require("fs");

let internalApi = {};

internalApi.BIN_LOCATION = `${__dirname}/bin/audiowaveform`;

internalApi.init = () => {
  if (fs.existsSync(internalApi.BIN_LOCATION)) {
    return internalApi.BIN_LOCATION;
  } else {
    throw "Audiowaveform not found!";
  }
};

module.exports = () => {
  return internalApi.init();
};
