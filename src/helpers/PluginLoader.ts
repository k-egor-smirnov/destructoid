import * as TelegramBot from 'node-telegram-bot-api';
import BasePlugin from "../models/BasePlugin";
import * as fs from 'fs';
import BaseController from "../models/BaseController";

class PluginLoader {
    plugins: any = {};

    setPlugin(plugin: BasePlugin): void {
        this.plugins = plugin;
    }

    async init(bot: TelegramBot, controller: BaseController) {
        return new Promise(((resolve, reject) => {
            fs.readdir('build/plugins', (err, files) => {
                for (let i in files) {
                    let Module = require("../plugins/" + files[i] + "/" + files[i] + ".js");
                    let object = new Module.default(bot, controller);
                    object.start();

                    this.plugins[files[i]] = object;

                    resolve()
                }
            })
        }))
    }
}

export default PluginLoader