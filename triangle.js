function triangle(n){
  if (n <= 1 ) {
      return n
  } else {
      return n + triangle(n-1)
  }
}

console.log(triangle(7));