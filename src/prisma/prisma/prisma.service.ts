import { Injectable } from '@nestjs/common';
import { info, log } from 'console';

@Injectable()
export class PrismaService {
    constructor() {
        // super()
        info('create prisma services')

    }
}
