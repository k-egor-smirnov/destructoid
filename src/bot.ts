import MessageController from "./controllers/MessageController";
import * as TelegramBot from 'node-telegram-bot-api';
import * as fs from 'fs';
import PluginLoader from "./helpers/PluginLoader";

const token = fs.readFileSync('./config/bot.json');

const bot = new TelegramBot(JSON.parse(token.toString()).token, {polling: true});

//TypeScript doesn't support without anonymous function :\
(async () => {
    const messageController = new MessageController(bot);
    const pluginLoader = new PluginLoader();

    await pluginLoader.init(bot, messageController);
    bot.on('message', messageController.handle);

    console.log(pluginLoader.plugins)
})();

