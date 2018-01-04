'use strict'

const Telegram = require('telegram-node-bot')

class RoundController extends Telegram.TelegramBaseController {
  add ($) {
    let username = $.message.text.split(' ').slice(1).join(' ').trim()
    if (!username) return $.sendMessage('You need to include username')
    $.getUserSession('participants').then(participants => {
      if (!Array.isArray(participants)) $.setUserSession('participants', [username])
      else $.setUserSession('participants', participants.concat([username]))
      $.sendMessage('You have been added as ' + username)
    })
    $.runMenu({
      message: 'Select:',
      layout: 1,
      '/add': () => {},
      '/get': () => {}
    })
  }
  get ($) {
    $.getUserSession('participants').then(participants => {
      if (participants.length) $.sendMessage(participants.join(', '))
      else $.sendMessage('No participants yet')
    })
  }
  get routes () {
    return {
      'addRoundCommand': 'add',
      'getRoundCommand': 'get'
    }
  }
}

module.exports = RoundController
