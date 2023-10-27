import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";

@Module({
    imports: [HttpModule],
    controllers: [PostController],
    providers: [PostService],
})

export class PostModule{}