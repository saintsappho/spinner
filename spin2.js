process.stdout.write('watch me spin!!')
let frames = ['\r|   ', '\r/   ','\r-   ','\r\\   ']
let spins = parseInt(process.argv.slice(2), 10 || 1)
const spinner = function(spins){
  for (let i = 0; i < spins; i++){
    ((index) => {
      for (let k = 0; k < 4; k++){
        setTimeout(() => {
          process.stdout.write(`\r${frames[k]}           `);
        }, ((index * 800) + (k * 200)))
      }
    })(i)
  } 
  // setTimeout(() => {
  //   process.stdout.write('\n');
  // }, (spins * 1010))
}
spinner(spins)
