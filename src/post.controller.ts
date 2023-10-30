import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('POSTS')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('post/:id')
  @ApiOperation({
    summary: 'Recupera post by id',
    description: "Richiede come parametro l'id del post",
  })
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  @Get('feed')
  @ApiOperation({
    summary: 'Recupera post',
    description: 'Recupera post',
  })
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postService.posts({
      where: { published: true },
    });
  }

  @Get('filtered-posts/:searchString')
  @ApiOperation({
    summary: 'Recupera post by title or content',
    description: 'Recupera post',
  })
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<PostModel[]> {
    return this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('post')
  @ApiOperation({
    summary: 'Crea post',
    description: 'Serve un body con title, content?, authorEmail',
  })
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<PostModel> {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Put('publish/:id')
  @ApiOperation({
    summary: 'Pubblica post by id',
    description: 'Serve come parametro id',
  })
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @Delete('post/:id')
  @ApiOperation({
    summary: 'Elimina post by id',
    description: 'Serve come parametro id',
  })
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
