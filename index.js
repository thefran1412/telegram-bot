'use strict'

// const schedule = require('node-schedule')
const Telegram = require('telegram-node-bot')
const RoundController = require('./controllers/round')
const StartController = require('./controllers/start')

const tg = new Telegram.Telegram('481317609:AAFtDtmuBBmDhsulWWm0LEd2m4S4E6Vj8Fw', {workers: 1})
const Round = new RoundController()
const Start = new StartController()

tg.router
  .when(
    new Telegram.TextCommand('/start'), Start)
  .when(
    new Telegram.TextCommand('/add', 'addRoundCommand'),
    Round
  )
  .when(
    new Telegram.TextCommand('/get', 'getRoundCommand'),
    Round
  )
