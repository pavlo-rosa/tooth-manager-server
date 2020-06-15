import {createLogger, format, transports} from 'winston';
import 'colors';

class LoggerService {
    private logger: any;

    constructor(route: string) {
        this.logger = createLogger({
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
                    return `${ts} ${route.blue} [${level}]:${message}\n${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
                })
            ),
            transports: [new transports.Console()]
        });
    }

    async info(message: string) {
        this.logger.log('info', message);
    }

    async debug(message: string) {
        this.logger.log('debug', message);
    }

    // async error(message: string) {
    //     this.logger.log('error', message);
    // }

    async error(message: string, obj: any) {
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
