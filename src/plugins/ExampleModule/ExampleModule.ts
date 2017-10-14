import * as TelegramBot from 'node-telegram-bot-api';
import ModuleInterface from "../../models/BasePlugin";
import MessageController from "../../controllers/MessageController";

class ExampleModule implements ModuleInterface {
    bot: TelegramBot;
    controller: MessageController;

    constructor(bot: TelegramBot, controller: MessageController) {
        this.bot = bot;
        this.controller = controller
    }

    start(): void {
        this.bot.sendMessage("157852639", "Hello, world!");
    }

    stop(): void {
    }
}


export default ExampleModule;