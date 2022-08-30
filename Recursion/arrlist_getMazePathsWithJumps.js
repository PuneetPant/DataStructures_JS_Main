let input = ''
process.stdin.on('data', (data) => {
  input += data
})

process.stdin.on('end', () => {
  input = input.trim().split('\n').map(val => {
    return val.trim()
  });
  main();
})

const main = () => {
  let row = input[0];
  let col = input[1];

  const ans = getMazePaths(0, 0, row - 1, col - 1, '')
  console.log(ans)
}

const getMazePaths = (sr, sc, row, col, psf) => {

  if (sr == row && sc == col) {
    console.log(psf)
    return [psf];
  }

  let hr = []
  for (let i = 1; i <= col; i++) {
    if (sc + 1 <= col) {
      hr = getMazePaths(sr, sc + 1, row, col, psf + `h${i}`);
    }

  }

  let vr = []
  for (let i = 1; i <= row; i++) {
    if (sr + 1 <= row) {
      vr = getMazePaths(sr + 1, sc, row, col, psf + `v${i}`);
    }

  }

  let dr = []

  for (let i = 1; i <= row && i <= col; i++) {
    if (sr + 1 <= row && sc + 1 <= col) {
      vr = getMazePaths(sr + 1, sc + 1, row, col, psf + `d${i}`);
    }
  }
  let marr = [];
  marr = marr.concat(hr, vr)
  return marr;
}