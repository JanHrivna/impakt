import { LoggerService } from "@nestjs/common";

export enum LogLevel {
    INFO = "INFO",
    ERROR = "ERROR",
    WARN = "WARN",
    DEBUG = "DEBUG",
    VERBOSE = "VERBOSE"
}

export class AppLogger implements LoggerService {

    constructor(private levels?: LogLevel[]) {
        if (!levels) {
            this.levels = Object.values(LogLevel)
        }
    }

    log(msg: any) {
        this.writeLog(msg, LogLevel.INFO)
    }

    error(msg: any, err: any) {
        this.writeLog(err, LogLevel.ERROR)
    }

    warn(msg: any) {
        this.writeLog(msg, LogLevel.WARN)
    }

    debug(msg: any) {
        this.writeLog(msg, LogLevel.DEBUG)
    }

    verbose(msg: any) {
        this.writeLog(msg, LogLevel.VERBOSE)
    }

    private writeLog(msg: string, level: LogLevel) {
        if (this.levels.includes(level)) {
            this.appendFile(msg, level)
        }
    }

    private appendFile(msg: string, level: LogLevel) {
        const fs = require('fs')
        const logMsg = `\n${new Date().toUTCString()}: ${level}: ${msg}`
        fs.appendFile('logs/app.log', logMsg, () => { })
    }

}
