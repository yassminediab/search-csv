import {createLogger, format, transports, config} from 'winston'
export const logger = createLogger({
    levels: config.syslog.levels,
    format:format.combine(
           format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
           format.align(),
           format.colorize(),
           format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
        ),
    transports: [new transports.Console()],
});

