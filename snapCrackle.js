function snapCrackle(maxValue) {
  let numeros = [];
  for (let i = 1; i <= maxValue; i++) {
    if (i % 2 != 0 && i % 5 == 0) {
      numeros.push("SnapCrackle");
    } else if (i % 5 == 0) {
      numeros.push("Crackle");
    } else if (i % 2 != 0) {
      numeros.push("Snap");
    } else {
      numeros.push(i);
    }
  }
  return numeros.join(", ");
}

console.log(snapCrackle(12));
