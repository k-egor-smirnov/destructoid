import * as TelegramBot from 'node-telegram-bot-api';
import BaseController from "../models/BaseController";

class MessageController implements BaseController {
    public plugins: object[];
    public bot: TelegramBot;

    constructor(bot: TelegramBot) {
        this.bot = bot;
    }

    handle(message: Object): void {
        console.log(message)
    }
}

export default MessageController;

