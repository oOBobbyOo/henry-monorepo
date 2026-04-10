import { Get, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getUsers() {
    // const user = this.configService.get<string>('DATABASE_USER')
    // const host = this.configService.get<string>('DB_HOST')

    const db = this.configService.get('db') as Record<string, any>

    console.log('[ db ] >>:', db)

    return `get all users`
  }
}
