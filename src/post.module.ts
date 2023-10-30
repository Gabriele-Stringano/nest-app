import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [HttpModule, PrismaModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
