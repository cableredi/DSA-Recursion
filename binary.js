function decimalToBinary(decimal) {
  if (decimal === 0) {
    return 0;
  }

  return ( decimal % 2 + 10 * decimalToBinary(Math.floor(decimal/2)) );
}

console.log(decimalToBinary(10));
