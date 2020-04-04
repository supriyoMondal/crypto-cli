const program = require('commander');
const { show, set, remove } = require('../commands/key')
program
    .command('set')
    .description('set API key -- Get that https://nomics.com')
    .action(() => set());

program
    .command('show')
    .description('show API key.')
    .action(() => show());

program
    .command('remove')
    .description('remove API key.')
    .action(() => remove());

program.parse(process.argv);