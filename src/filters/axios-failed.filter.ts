import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Response } from 'express';
import { STATUS_CODES } from 'http';
import { QueryFailedError } from 'typeorm';
import { AxiosError } from 'axios';
import { ConstraintErrors } from './constraint-errors';
function postgresExceptionToHttpStatus(exception: any): HttpStatus {
    return HttpStatus.INTERNAL_SERVER_ERROR;
}

export class AxiosErrorClass implements AxiosError {
    config: import('axios').AxiosRequestConfig;
    code?: string;
    request?: any;
    response?: import('axios').AxiosResponse<any>;
    isAxiosError: boolean;
    toJSON: () => object;
    name: string;
    message: string;
    stack?: string;
}
@Catch(AxiosErrorClass)
export class AxiosErrorFilter implements ExceptionFilter {
    constructor(public reflector: Reflector) {}

    catch(exception: AxiosError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        const errorMessage = ConstraintErrors[exception.code];

        const status =
            exception.code == 'ENOTFOUND'
                ? HttpStatus.BAD_GATEWAY
                : HttpStatus.NOT_FOUND;

        response.status(status).json({
            statusCode: status,
            error: STATUS_CODES[status],
            message: errorMessage,
        });
    }
}
