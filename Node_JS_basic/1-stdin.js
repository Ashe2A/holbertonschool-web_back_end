console.log('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (input) => {
  console.log(`Your name is: ${input}`);
  process.exit(0);
});

process.on('exit', () => {
  console.log('This important software is now closing\n');
});
