import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { Connection, MongoDBConnection, MySQLConnection, createConnection } from './connection/connection';
import { MailService, mailService } from './mail/mail.service';
import { UserRapository, createUserRapository } from './user-rapository/user-rapository';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      // useClass: process.env.DATABASE == 'MySQL' ? MySQLConnection : MongoDBConnection,
      useFactory: createConnection,
      inject: [ConfigService]
    },
    {
      provide: MailService,
      useValue: mailService
    },
    {
      provide: UserRapository,
      useFactory: createUserRapository,
      inject: [Connection]
    },
    {
      provide: 'EmailService',
      useExisting: MailService
    }
  ]
})
export class UserModule { }
