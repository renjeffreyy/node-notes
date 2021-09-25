const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');



yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: function () {
        console.log('Adding a new note!')
    }
})

//remove notes command
yargs.command({
    command:"remove",
    description:"remove notes",
    builder:function(){
        console.log('remove notes')
    }
})


yargs.command({
    command:"list",
    description:"list notes",
    builder:function(){
        console.log('list notes')
    }
})

yargs.command({
    command:"read",
    description:"read notes",
    builder:function(){
        console.log('read notes')
    }
})



// console.log(process.argv)
// console.log(yargs.argv)
