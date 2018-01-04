'use strict'

const schedule = require('node-schedule')
const Telegram = require('telegram-node-bot')
const RoundController = require('./controllers/round')

const Round = new RoundController()
const tg = new Telegram.Telegram('481317609:AAFtDtmuBBmDhsulWWm0LEd2m4S4E6Vj8Fw', {workers: 1})


tg.router
  .when(
    new Telegram.TextCommand('/start', 'startRoundCommand'),
    Round
  )
  .when(
    new Telegram.TextCommand('/add', 'addRoundCommand'),
    Round
  )
  .when(
    new Telegram.TextCommand('/get', 'getRoundCommand'),
    Round
  )

var intMail = schedule.scheduleJob('*/5 * * * * *', function () {
  console.log('its run')
})
