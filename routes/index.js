'use strict'

var express = require('express');
const hbs = require('handlebars')
const fs = require('fs')
const path = require('path')
var router = express.Router();
const BFX = require('bitfinex-api-node')

const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET
//
// const API_KEY = 'u4kolrc3gFqegkyZeR0oWreLpm4rwjiVIYNcU6aBBvh'
// const API_SECRET = '2BZIy6ixGksDBZ8iN6OpD4ytPgvJ72Qo1FHOS3XWfLh'

const opts = { version: 2 }

const bws = new BFX(API_KEY, API_SECRET, opts).ws

bws.on('open', () => {
  // bws.subscribeTrades('BTCUSD')
  // bws.subscribeOrderBook('BTCUSD')
  bws.subscribeTicker('BTCUSD')
  bws.subscribeTicker('ETHBTC')
  bws.subscribeTicker('LTCBTC')
  bws.subscribeTicker('BCHBTC')
  bws.subscribeTicker('XRPBTC')
  bws.subscribeTicker('ZECBTC')
  bws.subscribeTicker('IOTABTC')
  bws.subscribeTicker('DASHBTC')
  bws.subscribeTicker('EOSBTC')
  bws.subscribeTicker('ETCBTC')
  bws.subscribeTicker('SANBTC')


})

bws.on('ticker', (pair, ticker) => {
  console.log('Ticker:' + pair , 'Last Price:' + ticker[3])
})

// bws.on('trade', (pair, trade) => {
//   console.log('Trade:', trade)
// })

// bws.on('orderbook', (pair, book) => {
//   console.log('Order book:', book)
// })

// bws.on('subscribed', (data) => {
//   console.log('New subscription', data)
// })

bws.on('error', console.error)

module.exports = router;
