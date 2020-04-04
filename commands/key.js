const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('colors');
const { isRequired } = require('../utils/validation')

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input', name: 'key',
                message: 'Enter API key '.green + 'https://nomics.com',
                validate: isRequired
            }
        ])
        const key = keyManager.setKey(input.key);
        if (key) {
            console.log("API key set.".blue)
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log(`current API key ` + `${key}`.green)
        } catch (err) {
            console.log(err.message.red);
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log('key removed successfully'.yellow);
            return;
        } catch (err) {
            console.log(err.message.red);
        }
    },
}

module.exports = key;