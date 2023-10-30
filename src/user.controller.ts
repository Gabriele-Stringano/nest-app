import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { AuthGuard } from './auth.guard';

@Controller()
// @UseGuards(AuthGuard)
// con l'api tag dovrei aver racchiuso queste api in una loro categoria
@ApiTags('USERS')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.UserService.createUser(userData);
  }
}

/*{
  "title": "primo giorno a casa",
  "content": "si programma lets gp",
  "authorEmail": "bobobo@gmail.com"
} */
