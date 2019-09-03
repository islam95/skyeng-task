const sumStrings = (a, b) => {
  // Remove 0s from the beggining, split and reverse.
  a = a.replace(/^0+/, "").split("").reverse();
  b = b.replace(/^0+/, "").split("").reverse();

  // Good for perfomance
  const aLength = a.length;
  const bLength = b.length;

  let result = [];
  let carry = 0;
  let i = 0;

  while (i < aLength || i < bLength || carry !== 0) {
    let aVal = i < aLength ? parseInt(a[i]) : 0;
    let bVal = i < bLength ? parseInt(b[i]) : 0;
    let sum = aVal + bVal + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    i++;
  }

  return result.reverse().join("");
}

module.exports = sumStrings;
