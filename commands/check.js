const CryptoApi = require('../lib/CryptoApi')
const KeyManager = require('../lib/KeyManager')

const check = {
    async price(cmd) {
        try {
            let keyManager = new KeyManager();
            const key = keyManager.getKey();
            const api = new CryptoApi(key);
            const priceOutput = await api.getPriceData(cmd.coin, cmd.curr);
            if (priceOutput) {
                console.log(priceOutput);
            }
        } catch (error) {
            console.log(error.message.red);
        }
    }
}

module.exports = check;