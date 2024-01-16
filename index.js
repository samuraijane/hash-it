const bcrypt = require("bcrypt");

const [
  nodePath,
  filePath,
  _pw,
  _hash
] = process.argv;

const type = _pw && !_hash ? "hash" : _pw && _hash ? "compare" : "error";

if (type === "error") {
  // TODO consider providing an example of the proper way to call this code.
  console.error("The way you are supplying arguments is causing an error. Please try again.");
  return;
}

const saltRounds = 10;

if (process.argv.length > 4) {
  console.warn(`You have submitted more arguments than necessary. Ignoring everything after "${_hash}"...`);
}

if (type === "compare") {
  if (_hash.indexOf("$") < 0) {
    console.error("You must pass the argument for the hash with the hash itself enclosed in single quotes only. Using double quotes or no quotes at all will not work.");
    return;
  }

  bcrypt.compare(_pw, _hash, function(err, result) {
    if (err) {
      console.error(err);
      return;
    }
    const _result = result ? "Match is confirmed" : "Match unsuccesful";
    console.log(_result);
  });
} else if (type === "hash") {
  bcrypt.hash(_pw, saltRounds, function(err, hash) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(hash);
  });
} else {
  console.warn("Some other error has occurred.");
}

return;
