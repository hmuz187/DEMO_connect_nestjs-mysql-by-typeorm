import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule, 
    UserModule
  ],
})
export class AppModule {}
