const moment = require('moment');

function formatMessage(username, text) {
    return {
        username,
        text: '',
        time: ''
    }
}

module.exports = formatMessage;