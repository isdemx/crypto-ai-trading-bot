require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });
const channel = '@aicryptobotnotify';

bot.sendMessage(channel, 'Hi there!');