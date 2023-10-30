import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [HttpModule, PrismaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
