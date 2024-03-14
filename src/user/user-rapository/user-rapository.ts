import { Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection';
import { info } from 'console';

@Injectable()
export class UserRapository {
    connection: Connection

    save() {
        info(`save user with connecttion ${this.connection.getName()}`)
    }
}


export function createUserRapository(connection: Connection): UserRapository {
    const repository = new UserRapository()
    repository.connection = connection
    return repository
}
