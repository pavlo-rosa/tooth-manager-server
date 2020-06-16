import {createLogger, format, transports} from 'winston';
import 'colors';

class LoggerService {
    private logger: any;

    constructor(route: string) {
        this.logger = createLogger({
            level: 'debug',
            format: format.combine(
                format(info => {
                    info.level = info.level.toUpperCase();
                    return info;
                })(),
                format.colorize(),
                format.timestamp(),
                format.align(),
                format.printf((info) => {
                    // return `${info.level}: ${info.message}`;
                    const {timestamp, level, message, ...args} = info;

                    const ts = timestamp.slice(0, 19).replace('T', ' ');
                    return `${ts} ${route}`.grey + ` [${level}]:${message}${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
                })
            ),
            transports: [new transports.Console()]
        });
    }

    info(message: string, obj: any = null) {
        if (obj) {
            this.logger.log('info', message, {
                obj
            })
        } else {
            this.logger.log('info', message);
        }
    }

    debug(message: string, obj: any = null) {
        if (obj) {
            this.logger.log('debug', message, {
                obj
            })
        } else {
            this.logger.log('debug', message);
        }
    }

    error(message: string, obj: any = null) {
        if (obj) {
            this.logger.log('error', message, {
                obj
            })
        } else {
            this.logger.log('error', message);
        }

    }
}

export default LoggerService;
