const { v4: uuidv4 } = require("uuid");

class Band {
  constructor(name = "non-name") {
    this.id = uuidv4();
    this.name = name;
    this.votes = 0;
  }
}

module.exports = Band;
