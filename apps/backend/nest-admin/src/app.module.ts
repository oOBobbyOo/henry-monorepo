import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
// import * as dotenv from 'dotenv'

import { UserController } from './user/user.controller'
import { UserService } from './user/user.service'
import { UserModule } from './user/user.module'
import Configuration from './configuration'

// 根据环境加载不同的 .env 文件
// const envFilePath = `.env.${process.env.NODE_ENV || 'dev'}`

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // 自定义环境变量文件路径
      // envFilePath,
      // load: [
      //   // 加载公共 env 配置
      //   () =>
      //     dotenv.config({
      //       path: '.env',
      //     }),
      // ],

      load: [Configuration],
    }),
    UserModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
