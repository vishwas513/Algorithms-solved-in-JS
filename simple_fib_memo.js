function fibArray(n) {
  let arr = [];
  for (let x=0; x<n; x++) {
    arr.push(
      x < 2 ? 1 : arr[x - 1] + arr[x - 2]
    );
  }
  return arr;
}