import TelegramBot from 'node-telegram-bot-api';
import TOKEN from './secrets.js';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('text', (msg) => {
    const { text, chat } = msg;

    if (text.toLowerCase() === '/start') {
        bot.sendMessage(chat.id, 'Mensagem de teste');
    };
});