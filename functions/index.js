const TelegramBot = require('node-telegram-bot-api');
const functions = require('firebase-functions');
const express = require('express');


// Bot Configs
const bot = new TelegramBot(functions.config().telegrambot.key);
const app = express();

bot.setWebHook(functions.config().telegrambot.url);
app.use(express.json());

app.post('/', (req, res) => {
    try {
        bot.processUpdate(req.body);
        res.status(201).send({
            code: 201,
            message: 'BrederScheduleBot: Success'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            code: 500,
            message: 'BrederScheduleBot: Error',
            error
        })
    }
});

// Main Code
bot.on('message', msg => {
    const { text, chat } = msg;
    bot.sendMessage(chat.id, 'Hello World');
});

// Module Exports
module.exports = { brederScheduleBot: functions.https.onRequest(app) };