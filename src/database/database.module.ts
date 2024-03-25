import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user/user.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '...',   //input usernam
      password: '...', //input password
      database: '...', //input db name
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}