function countSheep(sheep) {
  if (sheep === 0) {
    return 'All sheep jumped over the fence';
  }

  console.log(sheep + ': Another sheep jumps over the fence')
  return countSheep(sheep - 1);
}

console.log(countSheep(3));