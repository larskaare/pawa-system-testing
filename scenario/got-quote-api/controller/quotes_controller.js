'use strict';


// Adding some Game of Thrones Quotes demo data
var quotes = require('../data/quotes_demo_data');


// Handlers
const getRandomQuote = async () => {
    
    var randomQuoteNo = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuoteNo];
};

module.exports = {
    getRandomQuote
};
