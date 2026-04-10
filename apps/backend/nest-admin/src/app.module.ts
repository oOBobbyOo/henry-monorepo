import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as dotenv from 'dotenv'

import { UserController } from './user/user.controller'
import { UserService } from './user/user.service'
import { UserModule } from './user/user.module'

// 根据环境加载不同的 .env 文件
const envFilePath = `.env.${process.env.NODE_ENV || 'dev'}`

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      load: [
        () =>
          dotenv.config({
            path: '.env',
          }),
      ],
    }),
    UserModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
