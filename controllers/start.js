'use strict'

const schedule = require('node-schedule')
const Telegram = require('telegram-node-bot')

class StartController extends Telegram.TelegramBaseController {
  handle ($) {
    console.log('started')
    $.sendMessage('Welcome to the bot!')

    // var interval = schedule.scheduleJob('*/5 * * * * *', function () {
    //   console.log('interval')
    //   $.sendMessage('New Round')
    // })
    $.runMenu({
      message: 'Commands:',
      layout: 2,
      '/add': () => {},
      '/get': () => {}
    })
  }
  // get routes () {
  //   return {
  //     'startCommand': 'start'
  //   }
  // }
}

module.exports = StartController
