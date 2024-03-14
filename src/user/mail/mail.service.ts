import { Injectable } from '@nestjs/common';
import { info } from 'console';

@Injectable()
export class MailService {
    send() {
        info('Send email')
    }
}

export const mailService = new MailService();
