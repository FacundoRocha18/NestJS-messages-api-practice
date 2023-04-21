import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Get('/:id')
  getMessage(@Param('id') id: string) {}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return body;
  }
}
