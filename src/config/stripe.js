const stripe = require('stripe')(process.env.STRIPE_SK || "sk_test_51IGxuIBpiWpF8qxwcZCPwxx7tD3sxJDO306OvpbeTrupKLInpj589i05U48O1Z0HJWiSPB7QQOBSO3M2UPQUpwam009xEeO1Hy")

module.exports = stripe;
