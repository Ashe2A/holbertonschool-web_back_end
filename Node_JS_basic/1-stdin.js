process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
process.stdin.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
