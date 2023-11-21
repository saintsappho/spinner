process.stdout.write('hello from spinner1.js... \rheyyy\n')
const spins = process.argv.slice(2)
for (i = 0; i < spins; i++){
  setTimeout(() => {
    process.stdout.write('\r|  ');
  }, 100 + i * 800);
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300 + i * 800);
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500 + i * 800);
  setTimeout(() => {
    process.stdout.write('\r\\   '); 
  }, 700 + i * 800);
}
