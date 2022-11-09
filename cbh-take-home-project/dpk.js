const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event) {
    candidate = eventPartitionKey(event)
  }

  candidate = candidatePartitionKey(candidate) || candidate

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = convertPartionKeytoHex(candidate);
  }
  return candidate;
};

const eventPartitionKey = (event) =>{
  if (event.partitionKey) {
    return event.partitionKey;
  }
    const data = JSON.stringify(event);
    return convertPartionKeytoHex(data)
}

const candidatePartitionKey = (candidate) => {
  if(!candidate) {
    return TRIVIAL_PARTITION_KEY;
  }

  if (typeof candidate !== "string") {
    return candidate = JSON.stringify(candidate);
  }
}

const convertPartionKeytoHex = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}