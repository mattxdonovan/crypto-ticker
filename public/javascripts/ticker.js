// var express = require('express');
// var router = express.Router();
// const BFX = require('bitfinex-api-node')
//
// const API_KEY = 'u4kolrc3gFqegkyZeR0oWreLpm4rwjiVIYNcU6aBBvh'
// const API_SECRET = '2BZIy6ixGksDBZ8iN6OpD4ytPgvJ72Qo1FHOS3XWfLh'
//
// const opts = {
//   version: 2,
//   transform: true
// }
//
// const bws = new BFX(API_KEY, API_SECRET, opts).ws
//
// bws.on('open', () => {
//   bws.subscribeTicker('BTCUSD')
//   bws.subscribeOrderBook('BTCUSD')
//   bws.subscribeTrades('BTCUSD')
// })
//
// // bws.on('orderbook', (pair, book) => {
// //   console.log('Order book:', JSON.stringify(book))
// // })
//
// // bws.on('trade', (pair, trade) => {
// //   console.log('Trade:', JSON.stringify(trade))
// // })
//
// bws.on('ticker', (pair, ticker) => {
//   console.log('Ticker:', JSON.stringify(ticker))
//   // console.log('Ticker:',)
// })
//
// bws.on('error', console.error)
//
//
// /* GET users listing. */
// router.get('/', function(req, res) {
//   // res.render('index', { title:  JSON.stringify(ticker) });
//   // res.render('index', { title: 'Express' });
//   bws.on('ticker', (pair, ticker) => {
//
//     res.send('index', { streamer: JSON.stringify(ticker) } )
//
//     // res.render('index', {streamer: JSON.stringify(streamer)})
//     // console.log('Ticker:',)
//   })
// });
//
// module.exports = router;
