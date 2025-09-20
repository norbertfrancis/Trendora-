const paypal = require('paypal-rest-sdk')

paypal.configure({
    mode : 'sandbox',
    client_id : process.env.CLIENT_ID,
    client_secret :process.env.SECRET_KEY,
})

module.exports = paypal;