const config = require('../config/config');

export function log() {
    if (config.log) {
        let log = "";
        for (let i in arguments) {
            log += `${arguments[i]} `;
        }
        console.log(log);
    }
}