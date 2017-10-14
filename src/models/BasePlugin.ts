import * as TelegramBot from 'node-telegram-bot-api';

interface BasePlugin {
    start(): void;
    stop(): void;
}

export default BasePlugin;