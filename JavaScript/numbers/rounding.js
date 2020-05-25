function roundNumber(number, type) {
  switch(type) {
    case "floor":
      return Math.floor(number);
    case "ceil":
      return Math.ceil(number);
    case "round":
      return Math.round(number);
    case "trunc":
      return Math.trunc(number);
    case "round":
      return Math.round(number);
  }
}

function roundWithDecimals(number, reqDecimals) {
  return number.toFixed(reqDecimals);
}

module.exports = {
  roundNumber,
  roundWithDecimals
};