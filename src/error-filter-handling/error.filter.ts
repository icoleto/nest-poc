import { ExceptionFilter, Catch, HttpException, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import { ErrorMsg } from './error';

@Catch(Error)
export class ErrorFilter implements ExceptionFilter {
    catch(error: Error, host: ArgumentsHost) {

        const response = host.switchToHttp().getResponse();
        const status = (error instanceof HttpException) ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        Logger.error(error.stack);
        const errorMsg = new ErrorMsg(new Date(), error.message);
        Logger.log(errorMsg);

        response.status(status).send(errorMsg);

    }
}