import { NestMiddleware, Logger, MiddlewareFunction, Injectable } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction {
        return (req, res, next) => {
            Logger.log('Request: ' + req.url);
            next();
        };
    }
}
